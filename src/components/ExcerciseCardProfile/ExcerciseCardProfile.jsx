import training from "../../services/training.services";
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const ExcerciseCardProfile = ({ showExerciseProfile }) => {

    const [showExercise, setShowExercise] = useState([]);
    const [counter, setCounter] = useState(3);


    useEffect(() => {
        setShowExercise(showExerciseProfile?.slice(counter - 3, counter))
    }, [showExerciseProfile.length, counter])


    const handleNextPage = () => {
        setCounter((prevCounter) => prevCounter + 3);
    };

    const handlePrevPage = () => {
        if (counter > 3) setCounter((prevCounter) => prevCounter - 3);
    };


    return (
        <>
            <Row className="listExercise">
                {showExercise?.map((exercise) => {


                    return (
                        <Col md={4} className="exercise-card" key={exercise.id} >
                            < Link to={`/training/${exercise.id}`}>
                                <img src={exercise?.gifUrl} alt={exercise.name} loading="lazy" />
                                <Stack direction="row">
                                    <Button as={"button"}>{exercise.bodyPart}</Button>
                                    <Button as={"button"}>{exercise.target}</Button>
                                </Stack>
                                <h3 className="prueba">{exercise.name}</h3>
                            </Link>
                        </Col >
                    )
                })}
            </Row >


            <div className="scrollNavigation">
                <button className='left' style={{ marginLeft: "32%", marginTop: "-5%" }} onClick={handlePrevPage}><img src="../../left-arrow.png" alt="" /></button>
                <button className='right' style={{ marginRight: "38%", marginTop: "-5%" }} onClick={handleNextPage}><img src="../../right-arrow.png" alt="" /></button>
            </div>

        </>
    )

}


export default ExcerciseCardProfile