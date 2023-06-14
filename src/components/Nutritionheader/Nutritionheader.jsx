import { Col, Row } from "react-bootstrap";
import "./Nutritionheader.css"


import { Box, Stack, Typography } from '@mui/material';





const Nutritionheader = () => {



    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" pr={"15%"} mb={"30%"}>
            <div style={{ marginLeft: "10%" }}>
                <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
                <Typography fontWeight={700} sx={{ fontSize: { lg: '54px', xs: '40px' } }} mb="23px" mt="30px">
                    Sweat, Smile
                    And Repeat
                </Typography>
                <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                    Check out the most effective exercises personalized to you
                </Typography>
                <Stack>
                    <Row style={{ marginLeft: "-5%" }}>

                        <Col md={{ span: 2, offset: 0 }}>
                            <a href="#exercises" onClick={() => window.scrollTo(0, 1280)}
                                style={{ float: "left", marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>
                                Explore Exercises
                            </a>
                        </Col>


                        <Col md={{ span: 2, offset: 0 }}>

                            <a href="#exercises" onClick={() => window.scrollTo(0, 1240)}
                                style={{ float: "left", marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>
                                Explore Exercises
                            </a>

                        </Col>

                        <Col md={{ span: 2, offset: 0 }}>

                            <a href="#exercises" onClick={() => window.scrollTo(0, 1240)}
                                style={{ float: "left", marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>
                                Explore Exercises
                            </a>

                        </Col>

                    </Row>
                </Stack>

            </div>
            <img src="../../nutritionHeader.jpg" alt="hero-banner" className="hero-banner-img" />
        </Box>
    )

}

export default Nutritionheader