import "./Marks.css"
import React, { useState } from 'react';
import { Modal, Button, Row, Col, Stack } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";
import trainingApiServices from "../../services/trainingApi.services";
import LineChartComponent from "../../components/LineChart/LineChart";
import { Typography } from "@mui/material"




const Marks = () => {


    const [showModal, setShowModal] = useState(false);
    const [markDate, setMarkDate] = useState(null);
    const [markWeight, setMarkWeight] = useState('');
    const [showExercise, setExercise] = useState()
    const [showLineChart, setLineChart] = useState([])
    const [display, setDisplay] = useState("none")



    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddMark = () => {

        trainingApiServices
            .editUserMarks({ markDate, markWeight, showExercise })
            .then((data) => console.log(data))
            .catch(err => console.log(err))

        handleCloseModal();
    }

    const handleShowLine = (exercise) => {

        trainingApiServices
            .getUserMarks(showExercise)
            .then(({ data }) => { setLineChart(data[exercise]) })
            .catch(err => console.log(err))

    }

    return (
        <>

            <h1 style={{
                textAlign: "center", marginTop: "10%", marginBottom: "-10%", fontSize: "5em", color: "purple",
                fontWeight: "bold"
            }}>Add Yours Marks</h1>
            <Row className="listExercise">

                < Col md={4} className="exercise-card"  >

                    <Link to={``}>
                        <img src={"../../pectoralGif.gif"} loading="lazy" />
                        <Stack direction="row">
                            <Button as={"button"} onClick={() => {
                                setExercise("chest")
                                setShowModal(true)
                                setDisplay("none")

                            }}
                            >add marks</Button>
                            <Button as={"button"} onClick={() => {
                                setExercise("chest")
                                handleShowLine("chest")
                                setDisplay("")
                                window.scrollTo(0, 1500)


                            }}>Your marks</Button>
                        </Stack>
                        <h3 className="prueba">Barbell Bench Press</h3>
                    </Link>

                </Col>

                < Col md={4} className="exercise-card"  >

                    <Link to={``}>
                        <img src={"../../squad.gif"} loading="lazy" />
                        <Stack direction="row">
                            <Button as={"button"} onClick={() => {
                                setExercise("squat")
                                setShowModal(true)
                                setDisplay("none")
                                window.scrollTo(0, 1500)


                            }}
                            >add marks</Button>
                            <Button as={"button"} onClick={() => {
                                setExercise("squat")
                                handleShowLine("squat")
                                setDisplay("")


                            }}>Your marks</Button>
                        </Stack>
                        <h3 className="prueba">Barbell Full Squat</h3>
                    </Link>

                </Col>

                < Col md={4} className="exercise-card"  >

                    <Link to={``}>
                        <img src={"../../dead.gif"} loading="lazy" />
                        <Stack direction="row">
                            <Button as={"button"} onClick={() => {
                                setExercise("dead")
                                setShowModal(true)
                                setDisplay("none")
                                window.scrollTo(0, 1500)

                            }}
                            >add marks</Button>
                            <Button as={"button"} onClick={() => {
                                setExercise("dead")
                                handleShowLine("dead")
                                setDisplay("")
                            }}>Your marks</Button>
                        </Stack>
                        <h3 className="prueba">Barbell Deadlift</h3>
                    </Link>

                </Col>

            </Row >



            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Marca</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="markDate">Fecha:</label>
                        <DatePicker
                            id="markDate"
                            selected={markDate}
                            onChange={(date) => setMarkDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="markWeight">Peso (kg):</label>
                        <input
                            type="number"
                            id="markWeight"
                            value={markWeight}
                            onChange={(e) => setMarkWeight(e.target.value)}
                            className="form-control"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleAddMark}>
                        Agregar
                    </Button>
                </Modal.Footer>
            </Modal>


            <div style={{ height: "700px", display: `${display}` }}>

                <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '150px' }} fontWeight={900} color="white" mb="100px" mt="200px">
                    <span style={{ color: 'purple', textTransform: 'capitalize' }}>{`Your ${showExercise} Marks`}</span>
                </Typography>
                <LineChartComponent showLineChart={showLineChart} />

            </div >

        </>

    )


}


export default Marks