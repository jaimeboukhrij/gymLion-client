import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/auth.context"
import { Button } from "react-bootstrap"
import userApiServices from "../../../services/user.services"

const Header = ({ gymFamilyIds }) => {

    const { user, logout } = useContext(AuthContext)


    const [showUser, setShowUser] = useState()

    useEffect(() => {
        gymFamilyIds

            ? userApiServices
                .getOneUser(gymFamilyIds)
                .then(({ data }) => setShowUser(data))
                .catch(err => console.log(err))

            : userApiServices
                .getOneUser(user?._id)
                .then(({ data }) => setShowUser(data))
                .catch(err => console.log(err))

    }, [gymFamilyIds])


    return (
        <>
            <div className={"profileHeadImg"} style={{ backgroundImage: `url(${showUser?.headerImg})` }}></div>

            <div className={"profileImg"} style={{ backgroundImage: `url(${showUser?.img})` }} > </div>

            <div className="textHead" style={{ display: showUser?.id === user._id ? "" : "none" }}>

                <Button>Edit Profile</Button>

            </div>
            <p id="profileName">{showUser?.firstName}  {showUser?.lastName}</p>
            <p id="profileUser">@{showUser?.userName}</p>

        </>
    )



}




export default Header