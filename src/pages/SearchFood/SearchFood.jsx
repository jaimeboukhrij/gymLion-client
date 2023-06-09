import { useEffect, useState } from "react";
import foodService from "../../services/food.services";
import "./SearchFood.css";
import { Card, Col, Row } from "react-bootstrap";
import FoodBar from "../../components/FoodBar/FoodBar";
import SeacrchFoodBar from "../../components/SeacrchFoodBar/SeacrchFoodBar";
import LeyendFoodSearch from "../../components/LeyendFoodSearch/LeyendFoodSearch";
import ChangeAmountSeearchFood from "../../components/ChangeAmountSeearchFood/ChangeAmountSeearchFood";
import CardFoodSearch from "../../components/CardFoodSearch/CardFoodSearch";

const SearchFood = () => {

    const [foodId, setFoodId] = useState();
    const [showFoodInf, setShowFoodInf] = useState()
    const [showAmount, setShowAmount] = useState(100)
    const [showModalMenu, setShowModalMenu] = useState("CaloricBreakdown")
    const [showDataBar, setShowDataBar] = useState()

    const showFoodNut = () => {
        foodService
            .getFoodInf(foodId, showAmount)
            .then(({ data }) => setShowFoodInf(data.nutrition))
            .catch((err) => console.log(err))

    }



    useEffect(() => {
        foodId && showFoodNut();
    }, [foodId, showAmount])



    return (
        <Row style={{ marginTop: "10%" }}>

            <SeacrchFoodBar setFoodId={setFoodId} />

            <Col md={{ span: 5, offset: 0 }}>

                <Card style={{ background: "#050801" }}>

                    <CardFoodSearch setShowModalMenu={setShowModalMenu} />

                    <Card.Body>
                        <Card.Text style={{ height: "100vh" }}>

                            <ChangeAmountSeearchFood setShowAmount={setShowAmount} showAmount={showAmount} />
                            {showFoodInf && showModalMenu == "CaloricBreakdown" && <LeyendFoodSearch showFoodInf={showFoodInf} foodId={foodId} />}


                        </Card.Text>
                    </Card.Body>

                </Card>

            </Col>

        </Row>

    )
}


export default SearchFood;
