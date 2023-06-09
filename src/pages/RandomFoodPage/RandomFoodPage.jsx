import React, { useEffect, useState } from "react";
import "./RandomFoodPage.css"
import MealCard from "../../components/MealdCard/MealCard";
import { Col, Row, Modal } from "react-bootstrap";
import foodService from "../../services/food.services";

function RandomFoodPage() {

    const [mealData, setMealData] = useState();
    const [calories, setCalories] = useState(2000);

    window.scrollTo(0, 0)


    const getMealdData = () => {
        foodService
            .getMeals(calories)
            .then(({ data }) => { setMealData(data.meals) })
            .catch(err => console.log(err))
    }

    function handleChange({ target }) {
        const { value } = target
        setCalories(value)
    }



    return (
        <div style={{ paddingTop: "6%", background: "white" }}>
            <section className="webdesigntuts-workshop">
                <div className="form">
                    <input type="search" onChange={handleChange} placeholder="¿Cuántas Kcal quieres consumir?" />
                    <button className="firstButom" onClick={getMealdData}>Search</button>
                </div>

                {
                    mealData
                    &&
                    <Row style={{ padding: "90px 0 0px 110px" }}>
                        {
                            mealData.map(meal => (
                                <Col key={meal.id}>
                                    <MealCard meal={meal} />
                                </Col>
                            ))}
                    </Row>
                }

            </section>

        </div>
    );
}

export default RandomFoodPage;
