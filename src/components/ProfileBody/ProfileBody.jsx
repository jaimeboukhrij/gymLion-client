import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import "./ProfileBody.css"
import { Col, Row } from "react-bootstrap"
import trainingApiServices from "../../services/trainingApi.services"
import { dark } from "@mui/material/styles/createPalette"


const ProfileBody = () => {

    const { user } = useContext(AuthContext)
    const [marks, setMarks] = useState()
    const [chestMark, setChestMark] = useState()
    const [squadMark, setsqueadMark] = useState()
    const [deadMark, setdeadMark] = useState()



    useEffect(() => {
        trainingApiServices
            .getUserMarks()
            .then(({ data }) => {
                console.log("......", data)
                setMarks(data)
            })
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        topChest()
        topSquat()
        topDead()
    }, [marks])

    const topChest = () => {
        const maxChest = marks?.chest?.reduce((max, obj) => {
            if (obj?.y > max?.y) {
                return obj;
            }
            else return max
        })
        setChestMark(maxChest?.y);

    }

    const topSquat = () => {
        const maxSquat = marks?.squat?.reduce((max, obj) => {
            if (obj?.y > max?.y) {
                return obj;
            }
            else return max
        })
        setsqueadMark(maxSquat?.y);

    }

    const topDead = () => {
        const topDead = marks?.dead?.reduce((max, obj) => {
            if (obj?.y > max?.y) {
                return obj;
            }
            else return max
        })
        setdeadMark(topDead?.y);

    }



    console.log(chestMark)




    return (

        <div className={"profileBody"}>
            <Row>
                <Col md={{ span: 6, offset: 0 }}>
                    <h1>{user.firstName} {user.lastName}</h1>
                </Col>

                <Col md={{ span: 4, offset: 1 }}>

                    <div className="iconCardDetail">
                        <Row>
                            <Col md={{ span: 2, offset: 0 }}>
                                <button><img src="../../press-de-banca.png" alt="" /></button>
                            </Col>

                            <Col md={{ span: 6, offset: 4 }}>
                                <h3 style={{ width: "300px", marginTop: "5%", marginLeft: "3%" }}>banca {chestMark} kg</h3>
                            </Col>
                        </Row>
                    </div>

                    <div className="iconCardDetail">
                        <Row>
                            <Col md={{ span: 2, offset: 0 }}>
                                <button><img src="../../squat.png" alt="" /></button>
                            </Col>

                            <Col md={{ span: 6, offset: 4 }}>
                                <h3 style={{ width: "300px", marginTop: "5%", marginLeft: "3%" }}>squad {squadMark} kg</h3>
                            </Col>

                        </Row>
                    </div>

                    <div className="iconCardDetail">
                        <Row>
                            <Col md={{ span: 2, offset: 0 }}>

                                <button><img src="../../leaft.png" alt="" /></button>
                            </Col>
                            <Col md={{ span: 6, offset: 4 }}>

                                <h3 style={{ width: "300px", marginTop: "5%", marginLeft: "3%" }}>Dead {deadMark} kg</h3>
                            </Col>
                        </Row>

                    </div>

                </Col>
            </Row>
        </div>
    )


}



export default ProfileBody