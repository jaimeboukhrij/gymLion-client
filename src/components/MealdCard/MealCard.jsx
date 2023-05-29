import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MealCard.css"

const MealCard = ({ meal }) => {

    const [mealData, setMealData] = useState();
    console.log(meal.id)

    useEffect(() => {
        const fetchMealData = async () => {
            const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${meal.id}/information`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '999cef8629msh1d645ba25963b8ep182047jsnf05459ad076d',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setMealData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMealData();
    }, [meal.id]);

    return (
        mealData ?
            <Card className='carRandomFood'>
                <Card.Img variant="top" src={mealData.image} />
                <Card.Body>
                    <Card.Title>{mealData.title}</Card.Title>
                    <Button as={"button"} >Go</Button>
                </Card.Body>
            </Card>
            :
            <p>pensando</p>
    )
}

export default MealCard;





// console.log(mealData.meals[0].id)