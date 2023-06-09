import { useEffect, useState } from "react"
import "./Training.css"
import training from "../../services/training.services"
import HorizontalScrollbar from "../../components/HorizontalScrollBar/HorizontalScrollBar"
import TrainingSearch from "../../components/TrainingSearch/TrainingSearch"
import ExerciceCard from "../../components/ExerciceCard/ExerciceCard"

const Training = () => {

    const [showBodyPartList, setShowBodyPartList] = useState()
    const [showBodyPart, setShowBodyPart] = useState()
    const [showBodyTagList, setShowBodyPartTagList] = useState()
    const [showBodyTagPart, setShowBodyTagPart] = useState()



    useEffect(() => {
        training
            .getBodyPartExer()
            .then(({ data }) => setShowBodyPartList(data))
            .catch(err => console.log(err))

    }, [showBodyPart])



    useEffect(() => {
        if (showBodyTagPart) {
            training
                .getOneBodyTagExer(showBodyTagPart)
                .then(({ data }) => setShowBodyPartTagList(data))
                .catch(err => console.log(err))

        }

    }, [showBodyTagPart])

    return (
        <>
            <TrainingSearch setShowBodyTagPart={setShowBodyTagPart} />
            <HorizontalScrollbar showBodyPartList={showBodyPartList} setShowBodyPart={setShowBodyPart} />
            <ExerciceCard showBodyPart={showBodyPart} showBodyTagList={showBodyTagList} />

        </>

    )
}




export default Training