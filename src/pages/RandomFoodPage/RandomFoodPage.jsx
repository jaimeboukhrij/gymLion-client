import React, { useEffect, useState } from "react";
import "./RandomFoodPage.css"
import MealCard from "../../components/MealdCard/MealCard";
import { Col, Row, Modal } from "react-bootstrap";
import DetailsMealdCard from "../../components/DetailsMealdCard/DetailsMealdCard";
import foodService from "../../services/food.services";

function RandomFoodPage() {

    window.scrollTo(0, 0)

    const [mealData, setMealData] = useState();
    const [calories, setCalories] = useState(2000);



    const getMealdData = () => {
        foodService
            .getMeals(calories)
            .then(({ data }) => {
                setMealData(data.meals)
            })
            .catch(err => console.log(err))
    }

    function handleChange(e) {
        setCalories(e.target.value);
    }



    return (
        <section className="webdesigntuts-workshop">
            <div className="form">
                <input type="search" onChange={handleChange} placeholder="¿Cuántas Kcal quieres consumir?" />
                <button className="firstButom" onClick={getMealdData}>Search</button>
            </div>

            {
                mealData ?

                    <Row style={{ padding: "90px 0 0px 110px" }}>

                        {mealData.map((meal, index) => (

                            <Col key={index}>
                                <MealCard meal={meal} />
                            </Col>

                        ))}

                    </Row>

                    :
                    null
            }
        </section>


    );
}

export default RandomFoodPage;
