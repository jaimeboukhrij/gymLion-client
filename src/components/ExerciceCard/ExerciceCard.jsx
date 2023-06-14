import React, { useEffect, useState } from "react";
import "./ExerciceCard.css";
import training from "../../services/training.services";
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { Col, Row } from "react-bootstrap";

const ExerciceCard = ({ showBodyPart, showBodyTagList, similarExerTarget, similarExerEquipament }) => {

    const [showExercise, setShowExercise] = useState([]);
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        if (showBodyPart) {
            training
                .getOneBodyPartExer(showBodyPart)
                .then(({ data }) => { setShowExercise(data.slice(counter - 3, counter)) })
                .catch(err => console.log(err))
        }
    }, [showBodyPart, counter])


    useEffect(() => {
        if (showBodyTagList) {
            setShowExercise(showBodyTagList.slice(counter - 3, counter));
        }
    }, [showBodyTagList, counter])

    useEffect(() => {
        if (similarExerTarget) {

            training
                .getOneBodyTagExer(similarExerTarget)
                .then(({ data }) => { setShowExercise(data.slice(counter - 3, counter)) })
        }
    }, [similarExerTarget, counter]);

    useEffect(() => {
        if (similarExerEquipament) {

            training
                .getExcerciseByEquipment(similarExerEquipament)
                .then(({ data }) => {
                    setShowExercise(data?.slice(counter - 3, counter))
                })
        }
    }, [similarExerEquipament, counter]);



    const handleNextPage = () => {
        setCounter((prevCounter) => prevCounter + 3);
    };

    const handlePrevPage = () => {
        if (counter > 9) setCounter((prevCounter) => prevCounter - 3);
    };

    return (
        <>
            <Row className="listExercise">
                {showExercise?.map((exercise) => (

                    < Col md={4} className="exercise-card" key={exercise.id} >
                        {console.log("deno d")}
                        <Link to={`/training/${exercise.id}`}>
                            <img src={exercise?.gifUrl} alt={exercise.name} loading="lazy" />
                            <Stack direction="row">
                                <Button as={"button"}>{exercise.bodyPart}</Button>
                                <Button as={"button"}>{exercise.target}</Button>
                            </Stack>
                            <h3 className="prueba">{exercise.name}</h3>
                        </Link>
                    </Col>
                ))}
            </Row >

            {showExercise.length > 0 &&
                <div className="scrollNavigation">
                    <button className='right' style={{ marginTop: "-8%" }} onClick={() => {

                        handleNextPage()
                    }}><img src="../../right-arrow.png" alt="" /></button>

                    <button className='left' style={{ marginRight: "5%", marginTop: "-8%" }} onClick={() => {

                        handlePrevPage()
                    }}><img src="../../left-arrow.png" alt="" /></button>
                </div>
            }

        </>
    );
};

export default ExerciceCard;



