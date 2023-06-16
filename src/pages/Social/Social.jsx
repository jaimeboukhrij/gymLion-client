
import { Col, Row } from "react-bootstrap"
import SidebarSocial from "../../components/socialComponents/SidebarSocial/SidebarSocial"
import "./Social.css"
import { useContext, useEffect, useState } from "react"
import userApiServices from "../../services/user.services"
import { AuthContext } from "../../contexts/auth.context"
import GymFamily from "../../components/socialComponents/GymFamily/GymFamily"
import Post from "../../components/socialComponents/Post/Post"
import Profile from "../../components/socialComponents/Profile/Profile"





const Social = () => {

    const [showModal, setShowModal] = useState("none");
    const { user } = useContext(AuthContext)
    const [selectedGym, setSelectedGym] = useState();
    const [homeClick, setHomeClick] = useState(false)
    const [profileClick, setProfileClick] = useState(false)
    const [gymFamilyIds, setGymFamilyIds] = useState()


    const [displayParts, setDisplayParts] = useState("home")



    const displays = (part, id) => {
        console.log("id----", id)
        setDisplayParts(part)
        setGymFamilyIds(id)
    }


    useEffect(() => {
        userApiServices.getOneUser(user._id).then(({ data }) => data?.gym === "" && setShowModal(""))
        disableScroll()
    }, [])

    function disableScroll() {
        document.documentElement.style.overflow = 'hidden';  // Para la mayoría de los navegadores
        document.body.scroll = 'no';  // Para algunos navegadores antiguos
    }

    useEffect(() => { selectedGym && userApiServices.addGym(selectedGym) }, [selectedGym])




    return (

        <Row style={{ paddingTop: "10%", overflowY: "hidden" }}>

            <Col md={{ span: 2, offset: 1 }}>
                <SidebarSocial setHomeClick={setHomeClick} homeClick={homeClick} setProfileClick={setProfileClick} profileClick={profileClick} displays={displays} />
            </Col>


            <Col md={{ span: 5, offset: 1 }}>

                <div style={{ width: "100%", display: displayParts == "home" ? "" : "none" }}  >
                    <Post homeClick={homeClick} profileClick={profileClick} displays={displays} />
                </div>

                <div style={{ width: "100%", display: displayParts == "theirProfiles" ? "" : "none" }}  >
                    <Profile profileClick={profileClick} gymFamilyIds={gymFamilyIds} />

                </div>






            </Col>


            <Col md={{ span: 3, offset: 0 }}>

                <div className="socialFriends">
                    <GymFamily displays={displays} />
                </div>

            </Col>

        </Row>



    )
}




export default Social