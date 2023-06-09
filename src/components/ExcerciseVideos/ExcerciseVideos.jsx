import { Row, Col } from "react-bootstrap"
import ytService from "../../services/yt.services"
import "./ExcerciseVideos.css"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"


const ExcerciseVideos = ({ showExcercise }) => {


    const [showVideo, setShowVideo] = useState()

    useEffect(() => {
        if (showExcercise) {
            ytService
                .getExcerciseVideo(showExcercise?.name)
                .then(({ data }) => {
                    let copy = data.contents.splice(0, 3)
                    setShowVideo(copy)
                })
        }
    }, [showExcercise])



    return (

        <Row className={"videoSection"}>

            <Typography className={"videoSectionTitle"} sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="white" mb="43px" ml="150px">
                Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{showExcercise?.name}</span> exercise videos
            </Typography>

            {
                showVideo?.map(({ video }) => {

                    return (

                        <Col md={{ span: 3, offset: 1 }}>

                            <Link to={`https://www.youtube.com/watch?v=${video.videoId}`}>

                                <img style={{ borderTopLeftRadius: '20px' }} src={`${video.thumbnails[0].url}`} alt="" />
                                <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="white" mt={"20px"}>
                                    {video.title}
                                </Typography>

                            </Link>

                        </Col>
                    )

                })
            }

            <ReactPlayer url={showVideo} />

        </Row>
    )
}



export default ExcerciseVideos