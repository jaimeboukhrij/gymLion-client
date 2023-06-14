import "./CaloriesFoodSearch.css"
import { useEffect, useState } from "react";
import foodService from "../../services/food.services";
import { Col, Modal, Row } from "react-bootstrap";
import LeyendFoodSearch from "../LeyendFoodSearch/LeyendFoodSearch";
import MyResponsivePie from "../MyResponsivePie/MyResponsivePie";
import ChangeAmountSeearchFood from "../ChangeAmountSeearchFood/ChangeAmountSeearchFood";


const CaloriesFoodSearch = ({ changesendFood, changeDisplay, setShowAmount, showAmount }) => {

    const [foodQuery, setFoodQuery] = useState("");
    const [showFood, setShowFood] = useState("");
    const [showModal, setShowModal] = useState(false)
    const [showFoodInf, setShowFoodInf] = useState()
    const [showNameFood, setShowNameFood] = useState()

    const [foodId, setFoodId] = useState()



    const handleQueryChange = ({ target }) => {
        const { value } = target
        setFoodQuery(value)

        foodService
            .searchFood(value)
            .then(({ data }) => setShowFood(data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        foodsInf(foodId)
    }, [showAmount])

    const foodsInf = (id) => {

        foodService
            .getFoodInf(id, showAmount)
            .then(({ data }) => {
                console.log()
                setShowNameFood(data.original)
                setShowFoodInf(data.nutrition)
            })
            .catch((err) => console.log(err))
    }


    return (
        <>
            <button style={{ float: "left", marginTop: "3%" }} onClick={() => changeDisplay()}>Watch Details</button>
            <form className="search-container">
                <input type="text" value={foodQuery} onChange={handleQueryChange} id="search-bar" placeholder="Add Your Food..." />
                <a href="#"><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
            </form>


            {
                showFood

                &&

                <div >

                    <Row>
                        {
                            showFood.map(({ id, name, image }) => {

                                return (
                                    <Col md={{ span: 12, offset: 1 }} >

                                        <div id="buttonMealDayPlan">
                                            <span onClick={() => {
                                                setFoodId(id)
                                                foodsInf(id)
                                                setShowModal(true)
                                            }}> {name} </span>
                                            <span style={{ fontSize: "0.7em", textTransform: "none" }}>(100 g)</span>
                                            <button onClick={() => {
                                                changesendFood(id)
                                                setFoodQuery("")
                                                setShowFood("")
                                            }}> +Add
                                            </button>
                                        </div>
                                    </Col>
                                )

                            })
                        }

                        <Modal
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            size="xl"
                            className="transparent-modal"
                        >
                            <Modal.Header closeButton>
                                <h3 style={{ textTransform: "capitalize", fontWeight: "bold" }}>{showNameFood}</h3>
                            </Modal.Header>
                            <Modal.Body closeButton style={{ height: "700px" }}>
                                <button
                                    onClick={() => {
                                        changesendFood(foodId);
                                        setFoodQuery("");
                                        setShowFood("");
                                        setShowModal(false);
                                    }}
                                >
                                    +Add
                                </button>
                                <ChangeAmountSeearchFood setShowAmount={setShowAmount} showAmount={showAmount} />
                                {showFoodInf && <LeyendFoodSearch showFoodInf={showFoodInf} />}
                            </Modal.Body>
                        </Modal>

                    </Row>

                </div >


            }

        </>

    );
}


export default CaloriesFoodSearch