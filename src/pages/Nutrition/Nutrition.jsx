import { Row, Col } from "react-bootstrap";
import "./Nutrition.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const Nutrition = () => {

    return (
        <>
            <Card className="aliCard">

                <Card.Title as={"h2"}>NUTRITION TRACKER: TRACK YOUR DAILY MEALS AND STAY INFORMED</Card.Title>
                <Row>
                    <Col md={4}>
                        <Card.Img variant="top" src=",,/../../../picture.webp" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>

                            <Card.Text>
                                The website allows you to track your daily meals and provides detailed information on nutrients and macronutrients. It calculates the total calories consumed in a day and offers a clear summary of your nutritional intake. It helps make informed decisions and maintain a healthy lifestyle.
                            </Card.Text>

                        </Card.Body>
                        <Button variant="primary">LET'S GET STARTED!</Button>
                    </Col>
                </Row>
            </Card>

            <Card className="aliCard inv">

                <Card.Title as={"h2"}>DON'T KNOW WHAT TO EAT? WE'LL THINK FOR YOU.</Card.Title>
                <Row>

                    <Col md={8}>
                        <Card.Body>

                            <Card.Text as={"p"}>
                                Discover personalized recipes based on your caloric needs.
                                Find delicious and healthy dishes tailored to your calorie requirements.
                                Simply input your desired calories and get customized recipes.
                                Find the culinary inspiration you need on our website.
                            </Card.Text>

                        </Card.Body>
                        <Link to={"/nutrition/randomFood"}> <Button as={"button"}>LET'S GET STARTED!</Button></Link>
                    </Col>

                    <Col md={4}>
                        <Card.Img as={"img"} variant="top" src=",,/../../../picture.webp" />
                    </Col>
                </Row>
            </Card >

            <Card className="aliCard ">

                <Card.Title as={"h2"}>NUTRIFACTS: DISCOVER THE CALORIES AND MACRONUTRIENTS OF ANY FOOD</Card.Title>
                <Row>


                    <Col md={4}>
                        <Card.Img as={"img"} variant="top" src=",,/../../../macro.jpg" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>

                            <Card.Text as={"p"}>
                                Explore the nutritional information of any food with ease.
                                Get detailed nutrition facts in seconds.
                                With our website, you can find out the calorie content and macronutrient breakdown of any food you desire.
                                Simply enter the name of the food and get instant, accurate results.
                            </Card.Text>

                            <Link to={"/nutrition/searchFood"}> <Button as={"button"}>LET'S GET STARTED!</Button></Link>
                        </Card.Body>
                    </Col>


                </Row>
            </Card>





        </>
    );

}

export default Nutrition