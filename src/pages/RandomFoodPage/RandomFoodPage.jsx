import React, { useState } from "react";
import "./RandomFoodPage.css"
import MealCard from "../../components/MealdCard/MealCard";
import { Col, Row } from "react-bootstrap";

function RandomFoodPage() {

    window.scrollTo(0, 0)

    const [mealData, setMealData] = useState();
    const [calories, setCalories] = useState(2000);

    async function getMealData() {
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}&diet=vegetarian&exclude=shellfish%2C%20olives`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '999cef8629msh1d645ba25963b8ep182047jsnf05459ad076d',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            const { meals } = data;
            setMealData(meals);
        } catch (error) {
            console.error(error);
        }
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
                mealData ?
                    <Row style={{ padding: "90px 0 0px 110px" }}>
                        {mealData.map((meal) => (
                            <Col key={meal.id}>
                                <MealCard meal={meal} />
                            </Col>
                        ))}
                    </Row>
                    : null
            }
        </section>
    );
}

export default RandomFoodPage;
