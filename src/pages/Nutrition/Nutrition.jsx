import { Row, Col } from "react-bootstrap";
import "./Nutrition.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Nutritionheader from "../../components/Nutritionheader/Nutritionheader";

const Nutrition = () => {

    return (
        <>


            <Nutritionheader />


            <Card className="aliCard">

                <Row>
                    <Col md={7}>
                        <Card.Img variant="top" src=",,/../../../tupper.jpg" />
                    </Col>
                    <Col md={5} style={{ paddingLeft: " 5%" }}>

                        <Card.Title as={"h2"}>NUTRITION TRACKER</Card.Title>
                        <Card.Body>
                            <p>
                                The website allows you to track your daily meals and provides detailed information on nutrients and
                                macronutrients. It calculates the total calories consumed in a day and offers a clear summary
                                of your nutritional intake.
                            </p>
                        </Card.Body>
                        <Link to={"/nutrition/mealsDay"}> <Button as={"button"}>LET'S GET STARTED!</Button></Link>
                    </Col>
                </Row>
            </Card>

            <Card className="aliCard  " style={{ background: "white" }}>

                <Row>
                    <Col md={7}>
                        <Card.Img variant="top" src=",,/../../../foodDetails.jpg" />
                    </Col>

                    <Col md={5} style={{ paddingLeft: " 5%" }}>

                        <Card.Title as={"h2"}>FOOD DETAILS</Card.Title>
                        <Card.Body>
                            <p>
                                The website allows you to track your daily meals and provides detailed information on nutrients and
                                macronutrients. It calculates the total calories consumed in a day and offers a clear summary
                                of your nutritional intake.
                            </p>
                        </Card.Body>
                        <Link to={"/nutrition/searchFood"}> <Button as={"button"}>LET'S GET STARTED!</Button></Link>
                    </Col>

                </Row>
            </Card>


            <Card className="aliCard">

                <Row>
                    <Col md={7}>
                        <Card.Img variant="top" src=",,/../../../mealdayplan.jpg" />

                    </Col>
                    <Col md={5} style={{ paddingLeft: " 5%" }}>

                        <Card.Title as={"h2"}>GET YOUR MEALDAY</Card.Title>
                        <Card.Body>
                            <p>
                                The website allows you to track your daily meals and provides detailed information on nutrients and
                                macronutrients. It calculates the total calories consumed in a day and offers a clear summary
                                of your nutritional intake.
                            </p>
                        </Card.Body>
                        <Link to={"/nutrition/randomFood"}> <Button as={"button"}>LET'S GET STARTED!</Button></Link>
                    </Col>
                </Row>
            </Card >





        </>
    );

}

export default Nutrition