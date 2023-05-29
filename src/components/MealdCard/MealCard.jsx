import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MealCard.css"
import foodService from '../../services/food.services';
import { Modal } from 'react-bootstrap';
import DetailsMealdCard from '../DetailsMealdCard/DetailsMealdCard';

const MealCard = ({ meal }) => {

    const [mealData, setMealData] = useState();
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getMealInf()
    }, []);


    const getMealInf = () => {
        foodService
            .getMealInf(meal.id)
            .then(({ data }) => {
                console.log(data)
                setMealData(data)
            })
            .catch(err => console.log(err))
    }
    const changeModal = () => {
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

                <Modal show={showModal} onHide={() => setShowModal(false)} style={{ margin: "0 0 0 -90px" }}>

                    <div className="modalFoodPage">

                        <Modal.Header closeButton>
                            <Modal.Title>Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <DetailsMealdCard {...mealData} />
                        </Modal.Body>

                    </div>
                </Modal>
            </>

            :

            <p>pensando</p>




    )
}

export default MealCard;





