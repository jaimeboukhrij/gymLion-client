import { useEffect, useState } from "react";
import foodService from "../../services/food.services"
import "./MealsDayPlanBreakfas.css";
import nutritionService from "../../services/nutrition.services";

const MealsDayPlanBreakfas = ({ addButton, showBringFood, setBreakfastCalories, setBreakfastProtein, deleteProduct, showAmount }) => {
    const [showbreakfast, setShowbreakfast] = useState([]);
    const [showBringBreakfast, setShowBringBreakfast] = useState([])
    const [showBreakfastCalories, setShowBreakfastCalories] = useState(0)



    useEffect(() => {

        getNutriInfo()

    }, [showBringFood])



    const getNutriInfo = () => {

        setShowbreakfast([])
        setShowBreakfastCalories(0)
        setShowBringBreakfast(showBringFood?.breakfast)
        const allPromises =
            showBringFood?.breakfast?.map((idFood, index) =>
                foodService.getFoodInf(idFood, showAmount).then((res) => res.data)
            );
        if (allPromises) {

            Promise.all(allPromises)
                .then((response) => {
                    setShowbreakfast(response);
                    const totalCalories = response.reduce(
                        (total, elem) =>
                            total +
                            elem.nutrition.nutrients.find((elem) =>
                                elem.name.includes("Calories")
                            ).amount,
                        0
                    )

                    const totalProtein = response.reduce(
                        (total, elem) =>
                            total +
                            elem.nutrition.nutrients.find((elem) =>
                                elem.name.includes("Protein")
                            ).amount,
                        0
                    )
                    setShowBreakfastCalories(parseInt(totalCalories))
                    setBreakfastCalories(totalCalories)
                    setBreakfastProtein(totalProtein)


                })
                .catch((err) => console.log(err));
        }
    };


    return (

        <div className={"MyMealsBreakFast"}>
            <h2>Breakfast <span>{showBreakfastCalories}</span> </h2>
            <ul>
                {
                    showbreakfast.map((elem, index) => {
                        const calories = elem.nutrition.nutrients.find((elem) => elem.name.includes("Calories"));

                        return (
                            <p key={index}>
                                {elem.name} ({elem.amount}g) <button onClick={() => deleteProduct(index, "breakfast")} id="deleteBreakfast">Delete</button> <span>{parseInt(calories.amount)}</span>
                            </p>
                        );
                    })}
            </ul>
            <button onClick={() => addButton("breakfast")}>+Add Food</button>
        </div>


    );
};

export default MealsDayPlanBreakfas;
