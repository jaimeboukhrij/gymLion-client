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
    }, [marks])

    const topChest = () => {
        // console.log("chestmark", marks?.chest)

        const maxChest = marks?.chest?.reduce((max, obj) => {

            if (obj?.y > max?.y) {
                return obj;
            }
            else return max

        });
        setChestMark(maxChest?.y);

    }


    console.log(chestMark)




    return (

        <div className={"profileBody"}>
            <Row>
                <Col md={{ span: 6, offset: 0 }}>
                    <h1>{user.firstName} {user.lastName}</h1>
                </Col>

                <Col md={{ span: 4, offset: 0 }}>
                    <div className="iconCardDetail">
                        <button><img src="../../body-part.png" alt="" /></button>
                        <h3 style={{ width: "100px" }}>banca {chestMark} kg</h3>
                    </div>

                    <div className="iconCardDetail">
                        <button><img src="../../target.png" alt="" /></button>
                        <h3>squat</h3>
                    </div>

                    <div className="iconCardDetail">
                        <button><img src="../../equipment.png" alt="" /></button>
                        <h3>dead</h3>
                    </div>
                </Col>
            </Row>
        </div>
    )


}



export default ProfileBody