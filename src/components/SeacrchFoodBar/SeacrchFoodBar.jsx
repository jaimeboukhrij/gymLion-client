import { useState } from "react";
import foodService from "../../services/food.services"
import { Button, Card, Col, Row, Nav, InputGroup, Form } from "react-bootstrap";


const SeacrchFoodBar = ({ setFoodId }) => {

    const [foodQuery, setFoodQuery] = useState("");
    const [showFoodList, setShowFoodList] = useState("");

    const handleQueryChange = ({ target }) => {
        const { value } = target
        setFoodQuery(value)
        foodService
            .searchFood(value)
            .then(({ data }) => setShowFoodList(data))
            .catch((err) => console.log(err))
    }

    return (

        <Col md={{ span: 6, offset: 0 }} style={{ background: "", height: "100vh" }}>
            <form className="search-container">
                <input type="text" value={foodQuery} onChange={handleQueryChange} id="search-bar" />
                <a href="#"><img className="search-icon"
                    src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
            </form>

            {
                showFoodList

                &&

                <div className="searchFood">
                    <Row>
                        {
                            showFoodList.map(({ id, name, image }) => {

                                return (
                                    <Col md={{ span: 3, offset: 3 }} >
                                        <Button className="foodResult" onClick={() => setFoodId(id)}>
                                            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
                                                alt={name} key={id} />
                                            <h3>{name}</h3>
                                        </Button>
                                    </Col>
                                )
                            })}

                    </Row>
                </div>

            }
        </Col>
    )

}



export default SeacrchFoodBar