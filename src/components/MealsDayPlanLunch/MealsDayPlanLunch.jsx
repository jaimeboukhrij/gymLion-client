import { useEffect, useState } from "react";
import foodService from "../../services/food.services";
import "./MealsDayPlanLunch.css";

const MealsDayPlanLunch = ({ addButton, showBringFood, setLunchCalories, deleteProduct, showAmount }) => {

    const [showLunch, setshowLunch] = useState([]);
    const [showLunchCalories, setShowLunchCalories] = useState(0)
    const [showBringLunch, setShowBringLunch] = useState([])


    useEffect(() => {

        getNutriInfo()

    }, [showBringFood])



    const getNutriInfo = () => {
        setShowLunchCalories(0)
        setshowLunch([])
        setShowBringLunch(showBringFood?.lunch)

        const allPromises =
            showBringFood?.lunch?.map((idFood, index) =>
                foodService.getFoodInf(idFood, showAmount).then((res) => res.data)
            )
        if (allPromises) {
            Promise.all(allPromises)
                .then((response) => {
                    setshowLunch(response);
                    const totalCalories = response.reduce(
                        (total, elem) =>
                            total +
                            elem.nutrition.nutrients.find((elem) =>
                                elem.name.includes("Calories")
                            ).amount,
                        0
                    );
                    setShowLunchCalories(parseInt(totalCalories))
                    setLunchCalories(totalCalories)
                })
                .catch((err) => console.log(err));
        }
    };

    return (

        <div className={"MyMealslunch"}>
            <h2>Lunch <span>{showLunchCalories}</span> </h2>
            <ul>
                {showLunch.map((elem, index) => {
                    const calories = elem.nutrition.nutrients.find((elem) =>
                        elem.name.includes("Calories")
                    );

                    return (
                        <p key={index}>
                            {elem.name} ({elem.amount}g)<button onClick={() => deleteProduct(index, "lunch")} id="deleteBreakfast">Delete</button> <span>{parseInt(calories.amount)}</span>
                        </p>
                    );
                })}
            </ul>
            <button onClick={() => addButton("lunch")}>+Add Food</button>
        </div>


    );
};

export default MealsDayPlanLunch