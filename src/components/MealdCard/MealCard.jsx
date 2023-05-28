
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MealCard.css"

const MealCard = ({ meal }) => {


    const [mealData, setMealData] = useState();

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setMealData(data);
            })
            .catch(() => {
                console.log("error");
            });
    }, [meal.id]);


    return (

        mealData
            ?
            <Card className='carRandomFood'>
                <Card.Img variant="top" src={mealData.image} />
                <Card.Body>
                    <Card.Title>{mealData.title}</Card.Title>

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            :
            <p>pensando</p>

    )
}



export default MealCard





// console.log(mealData.meals[0].id)