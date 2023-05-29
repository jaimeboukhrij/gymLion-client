import { useEffect, useState } from "react";
import foodService from "../../services/food.services";
import "./SearchFood.css";

const SearchFood = () => {
    const [foodQuery, setFoodQuery] = useState("");
    const [showFood, setShowFood] = useState("");

    const handleQueryChange = (e) => {
        const inputValue = e.target.value;
        setFoodQuery(inputValue);
        foodService
            .searchFood(inputValue) // Corrección: usar inputValue en lugar de foodQuery
            .then(({ data }) => {

                setShowFood(data);
            })
            .catch((err) => console.log(err));
    };

    console.log(showFood)

    return (
        <>

            <form className="MovieSearch">
                <input
                    type="text"
                    placeholder="Introduce un título..."
                    value={foodQuery}
                    onChange={handleQueryChange}
                />
            </form>
            {
                showFood

                    ?

                    <div style={{ background: "white" }}>
                        {showFood.map(({ id, name, image }) => {
                            const img = `https://spoonacular.com/cdn/ingredients_100x100/${image}`

                            return <img src={img} alt="" />
                        })}
                    </div>

                    :

                    <p>cargando...</p>
            }
        </>

    );
}


export default SearchFood;
