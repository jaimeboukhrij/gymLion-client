
import { Col, Row } from "react-bootstrap"
import SidebarSocial from "../../components/socialComponents/SidebarSocial/SidebarSocial"
import "./Social.css"
import { useContext, useEffect, useState } from "react"
import userApiServices from "../../services/user.services"
import { AuthContext } from "../../contexts/auth.context"
import GymFamily from "../../components/socialComponents/GymFamily/GymFamily"
import Post from "../../components/socialComponents/Post/Post"





const Social = () => {

    const [showModal, setShowModal] = useState("none");
    const { user } = useContext(AuthContext)
    const [selectedGym, setSelectedGym] = useState();
    const [homeClick, setHomeClick] = useState(false)


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

        <Row style={{ paddingTop: "5%", overflowY: "hidden" }}>

            <Col md={{ span: 2, offset: 1 }}>
                <SidebarSocial setHomeClick={setHomeClick} homeClick={homeClick} />
            </Col>


            <Col md={{ span: 5, offset: 1 }}>



                <div style={{ width: "100%" }}>
                    <Post homeClick={homeClick} />
                </div>

            </Col>


            <Col md={{ span: 3, offset: 0 }}>

                <div className="socialFriends">
                    <GymFamily />
                </div>

            </Col>

        </Row>



    )
}




export default Social