import "./CaloriesFoodSearch.css"
import { useEffect, useState } from "react";
import foodService from "../../services/food.services";
import { Button } from "react-bootstrap";

const CaloriesFoodSearch = ({ changeShowFood }) => {



    const [foodQuery, setFoodQuery] = useState("");
    const [showFood, setShowFood] = useState("");

    const handleQueryChange = ({ target }) => {
        const { value } = target
        setFoodQuery(value)

        foodService
            .searchFood(value)
            .then(({ data }) => setShowFood(data))
            .catch((err) => console.log(err))
    }


    return (
        <>
            <form class="search-bar my-page-specific-style">
                <input type="search" name="search" pattern=".*\S.*" required value={foodQuery} onChange={handleQueryChange} />
                <button class="search-btn" type="submit">
                    <span>Search</span>
                </button>
            </form>

            {
                showFood

                    ?

                    <div style={{ background: "white" }}>

                        <lu>
                            {
                                showFood.map(({ id, name, image }) => {

                                    return <li> <button onClick={() => changeShowFood(id)}> {name}  </button> </li>


                                })
                            }
                        </lu>
                    </div>

                    :

                    <p>cargando...</p>
            }

        </>

    );
}


export default CaloriesFoodSearch