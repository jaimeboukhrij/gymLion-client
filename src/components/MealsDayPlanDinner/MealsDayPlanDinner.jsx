import { useEffect, useState } from "react";
import foodService from "../../services/food.services";
import "./MealsDayPlanDinner.css";

const MealsDayPlanDinner = ({ addButton, showBringFood, setDinnerCalories, deleteProduct, showAmount }) => {

    const [showDinner, setshowDinner] = useState([]);
    const [showDinnerCalories, setShowDinnerCalories] = useState(0)
    const [showBringDinner, setShowBringDinner] = useState([])




    useEffect(() => {

        // if (!showBringDinner?.includes(showBringFood?.dinner) & showBringDinner?.length < showBringFood?.dinner.length) 
        getNutriInfo();

    }, [showBringFood])




    const getNutriInfo = () => {
        setShowDinnerCalories(0);

        setshowDinner([]);

        setShowBringDinner(showBringFood?.dinner)
        const allPromises =
            showBringFood?.dinner?.map((idFood, index) =>
                foodService.getFoodInf(idFood, showAmount).then((res) => res.data)
            )

        if (allPromises) {
            Promise.all(allPromises)
                .then((response) => {
                    setshowDinner(response);
                    const totalCalories = response.reduce(
                        (total, elem) =>
                            total +
                            elem.nutrition.nutrients.find((elem) =>
                                elem.name.includes("Calories")
                            ).amount,
                        0
                    );
                    setShowDinnerCalories(parseInt(totalCalories))
                    totalCalories ? setDinnerCalories(totalCalories) : setDinnerCalories(0)
                })
                .catch((err) => console.log(err));
        }
    };

    return (

        <div className={"MyMealsDinner"}>
            <h2>Dinner <span>{showDinnerCalories}</span> </h2>
            <ul>
                {showDinner.map((elem, index) => {
                    const calories = elem.nutrition.nutrients.find((elem) =>
                        elem.name.includes("Calories")
                    );

                    return (
                        <p key={index}>
                            {elem.name} ({elem.amount}g) <button onClick={() => deleteProduct(index, "dinner")} id="deleteBreakfast">Delete</button> <span>{parseInt(calories.amount)}</span>
                        </p>
                    );
                })}
            </ul>
            <button onClick={() => addButton("dinner")}>+Add Food</button>
        </div>


    );
};

export default MealsDayPlanDinner