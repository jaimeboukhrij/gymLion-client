import React, { useState } from "react";
import "./RandomFoodPage.css"
import MealCard from "../../components/MealdCard/MealCard";
import { Col, Row } from "react-bootstrap";


function RandomFoodPage() {
    const [mealData, setMealData] = useState();
    const [calories, setCalories] = useState(2000);

    function getMealData() {

        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=0d4111f1c8114aa7afe4173220dcc660&timeFrame=day&targetCalories=${calories}`
        )
            .then((response) => response.json())
            .then((data) => {

                const { meals } = data
                setMealData(meals)
            })
            .catch(() => {
                console.log("error");
            });
    }

    function handleChange(e) {
        setCalories(e.target.value);
    }

    return (

        <section className="webdesigntuts-workshop">
            <div className="form">
                <input type="search" onChange={handleChange} placeholder="¿Cuántas Kcal quieres consumir?" />
                <button onClick={getMealData}>Search</button>

            </div>
            {
                mealData
                    ?
                    <Row style={{ padding: "90px 50px" }}>
                        {
                            mealData.map((meal) => {

                                return (

                                    <Col>
                                        <MealCard meal={meal} />
                                    </Col>

                                )

                            })}
                    </Row>
                    :
                    ""
            }

        </section>



    );
}

export default RandomFoodPage;