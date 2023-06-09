import "./FoodCardProfile.css"
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { Col, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import foodService from "../../services/food.services";
import LeyendFoodSearch from "../LeyendFoodSearch/LeyendFoodSearch";


const FoodCardProfile = ({ showBringFavFood }) => {

    const [showFoodFav, setFoodFav] = useState()
    const [counter, setCounter] = useState(3);
    const [showModal, setShowModal] = useState(false)
    const [showFoodInf, setShowFoodInf] = useState()
    const [showNameFood, setShowNameFood] = useState()


    useEffect(() => {
        getNutriInfo()
    }, [showBringFavFood])



    const getNutriInfo = () => {

        const allPromises =
            showBringFavFood?.map((idFood, index) =>
                foodService.getFoodInf(idFood, 100).then((res) => res.data)
            )

        if (allPromises) {
            Promise.all(allPromises)
                .then((response) => { setFoodFav(response) })
                .catch((err) => console.log(err));
        }
    }

    const foodsInf = (id) => {

        foodService
            .getFoodInf(id, 100)
            .then(({ data }) => {
                console.log()
                setShowNameFood(data.original)
                setShowFoodInf(data.nutrition)
            })
            .catch((err) => console.log(err))
    }




    useEffect(() => {
        setFoodFav(showFoodFav?.slice(counter - 3, counter))
    }, [showFoodFav?.length, counter])


    const handleNextPage = () => {
        setCounter((prevCounter) => prevCounter + 3);
    };

    const handlePrevPage = () => {
        if (counter > 3) setCounter((prevCounter) => prevCounter - 3);
    };


    return (
        <>
            <Row className="listExercise">
                {showFoodFav?.map((food, index) => {
                    return (
                        <Col md={4} className="exercise-card" key={index} style={{ maxHeight: "200px" }} >

                            < Link onClick={() => {
                                foodsInf(food.id)
                                setShowModal(true)
                            }}>
                                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${food.image}`}
                                    alt={food.name} loading="lazy" style={{ width: "250px", marginTop: "3%", maxHeight: "200px" }} />
                                <h3 className="prueba">{food.name}</h3>
                            </Link>
                        </Col >
                    )
                })}
            </Row >


            <div className="scrollNavigation">
                <button className='left' style={{ marginLeft: "32%", marginTop: "0%" }} onClick={handlePrevPage}><img src="../../left-arrow.png" alt="" /></button>
                <button className='right' style={{ marginRight: "38%", marginTop: "0%" }} onClick={handleNextPage}><img src="../../right-arrow.png" alt="" /></button>
            </div>




            <Modal show={showModal} onHide={() => setShowModal(false)} size="lm">
                <Modal.Header closeButton >
                    <h3 style={{ textTransform: "capitalize", fontWeight: "bold" }}>{showNameFood}</h3>
                </Modal.Header>
                <Modal.Body closeButton style={{ background: "black", height: "700px", width: "700px" }}>


                    {/* <ChangeAmountSeearchFood setShowAmount={setShowAmount} showAmount={showAmount} nutrition /> */}

                    {showFoodInf && <LeyendFoodSearch showFoodInf={showFoodInf} />}

                </Modal.Body>
            </Modal>


        </>
    )

}




export default FoodCardProfile