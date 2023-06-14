import { Typography } from "@mui/material"
import "./SimilarExercise.css"
import ExerciceCard from "../ExerciceCard/ExerciceCard"
import { useEffect, useState } from "react"

const SimilarExercise = ({ showExcercise }) => {

    const [similarExerTarget, setSimilarExerTarget] = useState()
    const [similarExerEquipament, setSimilarExerEquipament] = useState()

    useEffect(() => {
        setSimilarExerTarget(showExcercise?.target)
    }, [showExcercise])


    useEffect(() => {
        setSimilarExerEquipament(showExcercise?.equipment)
    }, [showExcercise])





    return (
        <div>

            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '150px' }} fontWeight={700} color="black" mb="-300px" mt="-180px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>
            <ExerciceCard similarExerTarget={similarExerTarget} />


            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '150px' }} fontWeight={700} color="black" mt="30px" mb="-300px">
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
            </Typography>
            <ExerciceCard similarExerEquipament={similarExerEquipament} />

        </div>
    )
}


export default SimilarExercise