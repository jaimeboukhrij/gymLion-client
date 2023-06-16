import { useEffect, useState } from "react"
import "./GymFamily.css"
import userApiServices from "../../../services/user.services"
import { Col, Modal, Row } from "react-bootstrap";


const GymFamily = ({ displays }) => {

    const [gymMembers, setGymMembers] = useState()



    useEffect(() => {

        userApiServices
            .gymMembers()
            .then(({ data }) => {
                setGymMembers(data)

            })

    }, [])






    return (<>
        <h2>Gym Family</h2>
        <div className="GymFam">
            {
                gymMembers?.map(({ avatar, userName, firstName, lastName, _id }, index) => {
                    return (

                        <div className="membersCard" key={index} onClick={() => displays("theirProfiles", _id)}>
                            <Row>
                                <Col md={{ span: 2, offset: 1 }} >
                                    <img src={`${avatar}`} alt="" />
                                </Col>
                                <Col md={{ span: 8, offset: 0 }} style={{ paddingLeft: "6%" }} >

                                    <h4 style={{ marginTop: "16%" }}>{`${firstName} ${lastName}`}</h4>
                                    <h6 style={{ color: "grey", marginTop: "-3%" }} >{`@${userName}`}</h6>
                                </Col>
                            </Row>
                        </div>
                    )
                })
            }
        </div>
    </>
    )
}


export default GymFamily