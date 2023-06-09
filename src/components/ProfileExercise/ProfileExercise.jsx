import { useEffect, useState } from "react"
import "./ProfileExercise.css"
import trainingApiServices from "../../services/trainingApi.services"
import training from "../../services/training.services"
import ExerciceCard from "../ExerciceCard/ExerciceCard"
import ExcerciseCardProfile from "../ExcerciseCardProfile/ExcerciseCardProfile"
import { Typography } from "@mui/material"

const ProfileExercise = () => {
    const [idsExercise, setIdsExercise] = useState([])
    const [showExerciseProfile, setShowExerciseProfile] = useState([])

    useEffect(() => {
        trainingApiServices
            .getUserFavouriteExercise()
            .then(({ data }) => setIdsExercise(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (idsExercise.length > 0) {
            Promise
                .all(idsExercise.map(elem => training.getExcerciseById(elem)))
                .then(responses => {
                    const exerciseData = responses.map(response => response.data)
                    setShowExerciseProfile(exerciseData)
                })
                .catch(err => console.log(err))
        } else {
            setShowExerciseProfile([])
        }
    }, [idsExercise])


    return (
        <div style={{ marginTop: "20%" }}>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '150px' }} fontWeight={700} color="white" mb="-300px" mt="-180px">
                <span style={{ color: 'purple', textTransform: 'capitalize' }}>Your Favourites Exercices</span>
            </Typography>
            {showExerciseProfile.length > 0 && <ExcerciseCardProfile showExerciseProfile={showExerciseProfile} />}
        </div>
    )
}

export default ProfileExercise
