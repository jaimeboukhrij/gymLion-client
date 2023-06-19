import { useContext, useEffect, useState } from "react"
import socialService from "../../../services/social.services"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"


import userApiServices from "../../../services/user.services"
import { AuthContext } from "../../../contexts/auth.context"

const ProfilePost = ({ homeClick, profileClick, displays, gymFamilyIds, activeButton }) => {

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
        console.log("dentroooo")

        socialService
            .getPost()
            .then(({ data }) => {

                const ProfilePost = data.filter((data) => data.owner == user._id)
                setBringPost(ProfilePost.reverse())
            })
            .catch((e) => console.log(e))

    }, [profileClick])




    useEffect(() => {
        socialService
            .getPost()
            .then(({ data }) => {
                const ProfilePost = data.filter((data) => data.owner == gymFamilyIds)
                setBringPost(ProfilePost.reverse())
            })
            .catch((e) => console.log(e))

    }, [gymFamilyIds])

    useEffect(() => {
        setInfPost(undefined)
        socialService
            .getPost()
            .then(({ data }) => {
                const ProfilePost = data.filter((data) => data.owner == gymFamilyIds)
                setBringPost(ProfilePost.reverse())
            })
            .catch((e) => console.log(e))

    }, [activeButton])


    console.log("gymid", gymFamilyIds)



    useEffect(() => getPostInfo(), [bringPost])






    const getPostInfo = () => {

        const allPromises = bringPost?.map(({ owner }, index) => userApiServices.getOneUser(owner).then((res) => res.data))

        if (allPromises) {
            Promise
                .all(allPromises)
                .then((response) => setInfPost(response))
                .catch((err) => console.log(err));
        }
    }





    return (
        <div className="post">
            {
                infPost ?

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
                    :
                    <p>..........</p>
            }
        </div>
    )
}


export default ProfilePost