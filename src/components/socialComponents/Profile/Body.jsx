import { Col, Row } from 'react-bootstrap';
import './Body.css';

const Body = ({ handleButtonClick, activeButton }) => {



    return (
        <Row className="buttonsProfile" style={{ marginBottom: "3%" }}>
            <Col md={{ span: 2, offset: 0 }}>
                <button
                    onClick={() => handleButtonClick('Button 1')}
                    style={{
                        textDecoration: activeButton === 'Button 1' ? 'underline' : 'none',
                        fontWeight: activeButton === 'Button 1' ? 'bold' : 'normal',
                        color: activeButton === 'Button 1' ? 'black' : 'rgb(131, 128, 128)',

                    }}
                >
                    Posts
                </button>
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
                <button
                    onClick={() => handleButtonClick('Button 2')}
                    style={{
                        textDecoration: activeButton === 'Button 2' ? 'underline' : 'none',
                        fontWeight: activeButton === 'Button 2' ? 'bold' : 'normal',
                        color: activeButton === 'Button 2' ? 'black' : 'rgb(131, 128, 128)',

                    }}
                >
                    Pictures
                </button>
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
                <button
                    onClick={() => handleButtonClick('Button 3')}
                    style={{
                        textDecoration: activeButton === 'Button 3' ? 'underline' : 'none',
                        fontWeight: activeButton === 'Button 3' ? 'bold' : 'normal',
                        color: activeButton === 'Button 3' ? 'black' : 'rgb(131, 128, 128)',

                    }}
                >
                    Likes
                </button>
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
                <button
                    onClick={() => handleButtonClick('Button 4')}
                    style={{
                        textDecoration: activeButton === 'Button 4' ? 'underline' : 'none',
                        color: activeButton === 'Button 4' ? 'black' : 'rgb(131, 128, 128)',
                        fontWeight: activeButton === 'Button 4' ? 'bold' : 'normal',
                    }}
                >
                    Button
                </button>
            </Col>
        </Row>
    );
};

export default Body;
