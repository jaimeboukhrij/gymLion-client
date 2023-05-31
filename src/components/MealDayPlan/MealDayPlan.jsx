import { Dropdown } from "react-bootstrap"
import "./MealDayPlan.css"
import { useState } from "react"

const MealDayPlan = (showFood) => {



    return (
        <div style={{ background: "white", height: "400px", display: "" }}>

            <Dropdown >
                <Dropdown.Toggle className="MealDayDrow" id="dropdown-basic">
                    Desayuno
                </Dropdown.Toggle>
                <Dropdown.Menu className="MealDayDrowBody">
                    <button>+Add</button>
                </Dropdown.Menu>
            </Dropdown>


        </div>

    )
}

export default MealDayPlan