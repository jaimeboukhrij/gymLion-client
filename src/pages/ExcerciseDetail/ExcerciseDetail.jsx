import { useParams } from "react-router-dom"
import CardDetailEx from "../../components/CardDetailEx/CardDetailEx"
import "./ExcerciseDetail.css"
import { useEffect, useState } from "react"
import training from "../../services/training.services"
import ExcerciseVideos from "../../components/ExcerciseVideos/ExcerciseVideos"
import SimilarExercise from "../../components/SimilarExercise/SimilarExercise"


const ExcerciseDetail = () => {

    window.scrollTo(0, 0)

    const { idExercise } = useParams()
    const [showExcercise, setShowExercise] = useState()


    useEffect(() => {
        training
            .getExcerciseById(idExercise)
            .then(({ data }) => setShowExercise(data))
            .catch(err => console.log(err))
    }, [idExercise])



    return (
        <div className="exDetailPage">
            <CardDetailEx showExcercise={showExcercise} idExercise={idExercise} />
            <ExcerciseVideos showExcercise={showExcercise} />
            <SimilarExercise showExcercise={showExcercise} />
        </div>
    )

}

export default ExcerciseDetail