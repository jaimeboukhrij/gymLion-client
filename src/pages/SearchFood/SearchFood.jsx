import { useEffect, useState } from "react";
import foodService from "../../services/food.services";
import "./SearchFood.css";

const SearchFood = () => {

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
                        {
                            showFood.map(({ id, name, image }) => {
                                return <img src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`} alt={name} key={id} />
                            })
                        }
                    </div>

                    :

                    <p>cargando...</p>
            }

        </>

    );
}


export default SearchFood;
