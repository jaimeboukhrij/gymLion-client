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




    useEffect(() => window.scrollTo(0, 0), [])

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



        <div>
            <h1 style={{
                textAlign: "center", marginTop: "8%", marginBottom: "-5%", fontSize: "5em", color: "purple",
                fontWeight: "bold"
            }}>Search Food</h1>

            <Row style={{ marginTop: "20%" }}>
                <SeacrchFoodBar setFoodId={setFoodId} />


                <Col md={{ span: 5, offset: 0 }}>

                    <Card style={{ border: "none" }} >

                        <Card.Body>
                            <Card.Text style={{ height: "100vh" }}>
                                {showFoodInf && showModalMenu == "CaloricBreakdown" && <ChangeAmountSeearchFood setShowAmount={setShowAmount} showAmount={showAmount} />}
                                {showFoodInf && showModalMenu == "CaloricBreakdown" && <LeyendFoodSearch showFoodInf={showFoodInf} foodId={foodId} />}


                            </Card.Text>
                        </Card.Body>

                    </Card>

                </Col>

            </Row>
        </div>

    )
}


export default SearchFood;
