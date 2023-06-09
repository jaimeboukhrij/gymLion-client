import { Col, Row } from "react-bootstrap"
import "./CardDetailEx.css"
import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import trainingApiServices from "../../services/trainingApi.services"

const CardDetailEx = ({ showExcercise }) => {

    const [checkFavourite, setCheckFavourite] = useState(false)


    useEffect(() => {
        showExcercise
            &&
            trainingApiServices
                .getUserFavouriteExercise()
                .then(({ data }) => data.includes(showExcercise?.id) && setCheckFavourite(true))
                .catch(err => console.log(err))

    }, [showExcercise,])


    useEffect(() => {
        checkFavourite
            ?
            trainingApiServices
                .saveUserFavouriteExercise(showExcercise?.id)
                .then(() => console.log("añadido a favortios", showExcercise?.id))
                .catch(err => console.log(err))
            :
            trainingApiServices
                .deleteUserFavouriteExercise(showExcercise?.id)
                .then(() => console.log("eliminado de favortios", showExcercise?.id))
                .catch(err => console.log(err))

    }, [checkFavourite])



    return (

        <Row>

            <Col md={{ span: 5, offset: 1 }}>
                <img style={{ height: "770px" }} src={`${showExcercise?.gifUrl}`} alt="" />
            </Col>

            <Col md={{ span: 5, offset: 0 }} className="textCardDetail">

                <h1>{showExcercise?.name}</h1>

                <h4 >{showExcercise?.name} bup is one
                    of the best  exercises to target your {showExcercise?.target}. It will help you improve your{' '}
                    mood and gain energy.</h4>

                <div className="iconCardDetail">
                    <button><img src="../../body-part.png" alt="" /></button>
                    <h3>{showExcercise?.bodyPart}</h3>
                </div>

                <div className="iconCardDetail">
                    <button><img src="../../target.png" alt="" /></button>
                    <h3>{showExcercise?.target}</h3>
                </div>

                <div className="iconCardDetail">
                    <button><img src="../../equipment.png" alt="" /></button>
                    <h3>{showExcercise?.equipment}</h3>
                </div>

                <div className="iconCardDetail">
                    <input id="toggle-heart" type="checkbox" onClick={() => setCheckFavourite(!checkFavourite)} checked={checkFavourite} />
                    <label for="toggle-heart" aria-label="like">❤</label>
                    <h3>Add Favourite</h3>
                </div>

            </Col>

        </Row>

    )


}


export default CardDetailEx