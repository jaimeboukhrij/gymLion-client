import { Row, Col } from "react-bootstrap";
import "./Alimentacion.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const Alimentacion = () => {

    return (
        <>
            <Card className="aliCard">

                <Card.Title as={"h2"}>¿NO SABES QUE COMER? NOSOTROS PENSAMOS POR TI</Card.Title>
                <Row>
                    <Col md={4}>
                        <Card.Img as={"img"} variant="top" src=",,/../../../picture.webp" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>

                            <Card.Text as={"p"}>
                                Descubre recetas personalizadas según tus necesidades calóricas.
                                Encuentra platos deliciosos y saludables adaptados a tus requerimientos caloricos.
                                Simplemente ingresa las calorías deseadas y obtén recetas a medida.
                                Encuentra la inspiración culinaria que necesitas en nuestra página.
                            </Card.Text>

                        </Card.Body>
                        <Link to={"/alimentacion/randomFood"}> <Button as={"button"}>COMENCEMOS!</Button></Link>
                    </Col>
                </Row>
            </Card >

            <Card className="aliCard inv">

                <Card.Title as={"h2"}>NUTRIFACTS: DISCOVER THE CALORIES AND MACRONUTRIENTS OF ANY FOOD</Card.Title>
                <Row>
                    <Col md={8}>
                        <Card.Body>

                            <Card.Text as={"p"}>
                                Explore the nutritional information of any food with ease.
                                Get detailed nutrition facts in seconds.
                                With our website, you can find out the calorie content and macronutrient breakdown of any food you desire.
                                Simply enter the name of the food and get instant, accurate results.
                            </Card.Text>

                        </Card.Body>
                        <Link to={"/alimentacion/searchFood"}> <Button as={"button"}>COMENCEMOS!</Button></Link>
                    </Col>

                    <Col md={4}>
                        <Card.Img as={"img"} variant="top" src=",,/../../../macro.jpg" />
                    </Col>
                </Row>
            </Card>
            <Card className="aliCard">

                <Card.Title as={"h2"}>¿NO SABES QUE COMER? NOSOTROS PENSAMOS POR TI</Card.Title>
                <Row>
                    <Col md={4}>
                        <Card.Img variant="top" src=",,/../../../picture.webp" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>

                            <Card.Text>
                                Descubre recetas personalizadas según tus necesidades calóricas.
                                Encuentra platos deliciosos y saludables adaptados a tus requerimientos caloricos.
                                Simplemente ingresa las calorías deseadas y obtén recetas a medida.
                                Encuentra la inspiración culinaria que necesitas en nuestra página.
                            </Card.Text>

                        </Card.Body>
                        <Button variant="primary">COMENCEMOS!</Button>
                    </Col>
                </Row>
            </Card>




        </>
    );

}

export default Alimentacion