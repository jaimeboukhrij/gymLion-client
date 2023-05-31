import { useState } from "react";
import { Form, Row, Col, Dropdown } from "react-bootstrap"
import "./MealsDay.css"
import MealDayPlan from "../../components/MealDayPlan/MealDayPlan";
import CaloriesFoodSearch from "../../components/CaloriesFoodSearch/CaloriesFoodSearch";
import nutritionService from "../../services/nutrition.services";


const MealsDay = () => {

    const [date, setDate] = useState("")
    const [changeMeal, setChangeMeal] = useState()
    const [display, setDisplay] = useState("none")
    const [showFood, setShowFood] = useState({
        Mealdate: "",
        breakfast: [],
        lunch: [],
        dinner: [],
        additional: []
    })


    const changeShowFood = (elem) => {
        let copy = { ...showFood }
        copy[changeMeal].push(elem)
        setShowFood(copy)
        setDisplay("")

        nutritionService
            .saveMealDayInf(showFood)
            .catch(err => console.log(err))
    }

    const addButton = (eachMeal) => {
        setChangeMeal(eachMeal)
        setDisplay("")
    }

    const handleInputChange = e => {
        const { value } = e.target
        setDate(value)
        showFood.Mealdate = value
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    console.log(showFood)



    return (
        <>

            <Form onSubmit={handleSubmit}>
                <input className="calendar" type="date" id="start" name="trip-start"
                    value={date} onChange={handleInputChange}
                    min="2023-01-01" max="2025-12-31" />
            </Form>


            <Row>
                <Col md={6}>
                    <div style={{ background: "white", height: "400px", display: "" }}>

                        {/* DESAYUNO  */}
                        <Dropdown>
                            <Dropdown.Toggle className="MealDayDrow" id="dropdown-basic">
                                Desayuno
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="MealDayDrowBody">
                                <ul>
                                    {
                                        showFood
                                            ?
                                            showFood.breakfast.map((elem) => {
                                                return <p>{elem}</p>
                                            })
                                            :
                                            <p>....</p>
                                    }

                                </ul>
                                <button onClick={() => addButton("breakfast")}>+Add</button>
                            </Dropdown.Menu>
                        </Dropdown>


                        {/* COMIDA  */}
                        <Dropdown>
                            <Dropdown.Toggle className="MealDayDrow" id="dropdown-basic">
                                Comida
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="MealDayDrowBody">
                                <button >+Add</button>
                            </Dropdown.Menu>
                        </Dropdown>




                    </div>
                </Col>

                <Col md={6}>
                    <div style={{ display: `${display}` }}>
                        <CaloriesFoodSearch changeShowFood={changeShowFood} />
                    </div>

                </Col>

            </Row>

        </>
    )
}


export default MealsDay