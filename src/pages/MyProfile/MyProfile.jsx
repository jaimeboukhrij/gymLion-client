import ProfileBody from "../../components/ProfileBody/ProfileBody"
import ProfileExercise from "../../components/ProfileExercise/ProfileExercise"
import ProfileFood from "../../components/ProfileFood/ProfileFood"
import ProfileHeadImg from "../../components/ProfileHeadImg/ProfileHeadImg"
import "./MyProfile.css"


const MyProfile = () => {


    return (
        <>
            <ProfileHeadImg />
            <ProfileBody />
            <ProfileExercise />
            <ProfileFood />
        </>
    )

}



export default MyProfile