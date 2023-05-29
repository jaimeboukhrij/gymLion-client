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

                <Card.Title as={"h2"}>¿NO SABES QUE COMER? NOSOTROS PENSAMOS POR TI</Card.Title>
                <Row>
                    <Col md={8}>
                        <Card.Body>

                            <Card.Text as={"p"}>
                                Descubre recetas personalizadas según tus necesidades calóricas.
                                Encuentra platos deliciosos y saludables adaptados a tus requerimientos caloricos.
                                Simplemente ingresa las calorías deseadas y obtén recetas a medida.
                                Encuentra la inspiración culinaria que necesitas en nuestra página.
                            </Card.Text>

                        </Card.Body>
                        <Button as={"button"} >COMENCEMOS!</Button>
                    </Col>

                    <Col md={4}>
                        <Card.Img as={"img"} variant="top" src=",,/../../../picture.webp" />
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