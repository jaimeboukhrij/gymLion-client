import { useContext, useEffect, useState } from "react"
import socialService from "../../../services/social.services"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"

import "./Post.css"
import userApiServices from "../../../services/user.services"
import { AuthContext } from "../../../contexts/auth.context"

const Post = ({ homeClick, profileClick, displays, gymFamilyIds, activeButton }) => {

    const [bringPost, setBringPost] = useState()

    const [infPost, setInfPost] = useState({})

    const { user } = useContext(AuthContext)


    useEffect(() => {
        socialService
            .getPost()
            .then(({ data }) => {

                data?.lenght > 0 && setBringPost(data.reverse())


            })
            .catch((e) => console.log(e))

    }, [])

    useEffect(() => {

        socialService
            .getPost()
            .then(({ data }) => { setBringPost(data.reverse()) })
            .catch((e) => console.log(e))

    }, [homeClick])







    useEffect(() => getPostInfo(), [homeClick, bringPost])



    const getPostInfo = () => {


        const allPromises = bringPost?.map(({ owner }, index) => userApiServices.getOneUser(owner).then((res) => res.data))

        if (allPromises) {
            Promise
                .all(allPromises)
                .then((response) => setInfPost(response))
                .catch((err) => console.log(err));
        }
    };







    return (
        <>
            <h2 style={{ marginBottom: "3%", color: "grey", fontFamily: "sans-serif", fontWeight: "600" }}>POST</h2>
            <div className="post">
                {
                    setInfPost &&

                    bringPost?.map(({ text, image, owner }, index) => {


                        return (
                            <Row key={index} className="eachPost">
                                <Col md={{ span: 1, offset: 0 }} style={{ cursor: "pointer" }} onClick={() => displays("theirProfiles", owner)}>
                                    <img className="eachPostProfileImg" src={`${infPost[index]?.img}`} alt="" />
                                </Col>

                                <Col md={{ span: 6, offset: 0 }} style={{ paddingTop: "3%" }}>
                                    <span className="user" style={{ cursor: "pointer" }} onClick={() => displays("theirProfiles", owner)}>
                                        {infPost[index]?.firstName} {infPost[index]?.lastName}
                                        <span style={{ marginLeft: "3%", fontWeight: "600", color: "grey" }}>
                                            @{infPost[index]?.userName}
                                        </span>
                                    </span>

                                    <span className="text">
                                        {text}
                                    </span>

                                    <span className="img">
                                        <img src={image} alt="" />
                                    </span>

                                </Col>

                            </Row>
                        )


                    })
                }
            </div>
        </>
    )
}


export default Post