import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MealCard.css"
import foodService from '../../services/food.services';
import { Modal } from 'react-bootstrap';
import DetailsMealdCard from '../DetailsMealdCard/DetailsMealdCard';
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalHeader from 'react-bootstrap/ModalHeader'

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

                <Modal show={showModal} className={ModalTitle} onHide={() => setShowModal(false)} style={{ margin: "0 0 0 -250px" }}>

                    <div className="modalFoodPage">

                        <Modal.Header className='modal-header' closeButton>
                            <Modal.Title as={"h1"} >{shortTitle}</Modal.Title>
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





