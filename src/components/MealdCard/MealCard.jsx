import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MealCard.css"
import foodService from '../../services/food.services';
import { Modal } from 'react-bootstrap';

const MealCard = ({ meal }) => {

    const [mealData, setMealData] = useState();
    const [showModal, setShowModal] = useState(false)
    const [showMealCard, setShowMealCard] = useState()

    useEffect(() => {
        getMealInf()
    }, []);

    const getMealInf = () => {
        foodService
            .getMealInf(meal.id)
            .then(({ data }) => {
                setMealData(data)
            })
            .catch(err => console.log(err))
    }

    const changeModal = () => {
        foodService
            .getRecipeCard(meal.id)
            .then(({ data }) => {
                setShowMealCard(data)
            })
            .catch(err => console.log(err))
        setShowModal(true)
    }


    const shortTitle = mealData?.title.length > 7 ? `${mealData?.title.substr(0, 20)}...` : mealData?.title

    return (
        mealData
            ?
            <>
                <Card className='carRandomFood'>
                    <Card.Img variant="top" src={mealData.image} />

                    <Card.Body>
                        <Card.Title as={"h2"}>{shortTitle}</Card.Title>
                        <Button className='carRandomFoodButton' onClick={changeModal}>Details</Button>
                    </Card.Body>

                </Card>

                <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" ba>
                    <Modal.Header closeButton >

                    </Modal.Header>
                    <Modal.Body closeButton>
                        {
                            showMealCard ?
                                <img src={showMealCard.url} alt="" />
                                :
                                <p>...</p>
                        }
                    </Modal.Body>
                </Modal>

            </>

            :

            <p>pensando</p>
    )
}

export default MealCard;





