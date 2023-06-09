import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import "./ProfileHeadImg.css"


const ProfileHeadImg = () => {

    const { user, logout } = useContext(AuthContext)


    return (
        <>
            <div className={"profileHeadImg"} style={{ backgroundImage: "url(https://fondosmil.com/fondo/4066.jpg)" }}></div>

            <div className={"profileImg"} style={{ backgroundImage: `url(${user.avatar})` }} > </div>

        </>
    )

}



export default ProfileHeadImg