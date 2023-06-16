import { useContext, useState } from "react";
import "./SidebarSocial.css"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import ModalPublication from "../ModalPublication/ModalPublication";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth.context";


const SidebarSocial = ({ setHomeClick, homeClick, setProfileClick, profileClick, displays }) => {


    const [showModal, setShowModal] = useState(false)

    const { user } = useContext(AuthContext)

    return (

        <div className="socialNavbar">


            <div className="boxSidebar" onClick={() => {
                setHomeClick(!homeClick)
                displays("home")
            }}>
                <Row>
                    <Col className={"socialNavbarImg"} md={{ offset: 2, span: 3 }} >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAeBJREFUSEvt1r/LzmEUx/HXQ34syqYMDAwGUsggRVmEZBARpSzIxMI/oCg2pOhRfkWKhBgUJYMoxaIYGJRNWZBfnbpu3a7n+72+P6hnea7lrvuc83lf33Ou65xrxDitkXHi+hfwDvzCpT6b7wsO6IUE3ImLXeF9wGtxG5MT7Ac24F4XeFfwcjzC9AzyBavwtC28C3genmFmjfgnLMPbNvC24Fnpa+Y0iL5HZOVjE7wNeAaeYGGTWLK/wgp8Lvk3gafiAVa2hA7cHmMNvtXFlcCTcAMbO0IH7rewKd31MRIl8Fns7gkdhJ3E/iqNOvBhHClAI5XPk31pQykO4WiuVQXehdEaaDSLzbiZ2SOl14eaSh4+prvl4OhKdxD1rVoncLDGdhwHamw/sQ73B/Zh8AK8wLRCirfjSo19Gy4XYr9iMV6HzzB4L041HKb1uFvjE18U2SqtPTiTg6PpxymenSKj1nMzlX04XaNctfF3OJ/8P+Ac4pwU5/HD1PiHOS+xBN8zeDSa6OOLsv9joKyu2mjpHleBQyMAcUXid0qCHUsDImf8V3BDGf8yT4D/pKNPjSdSXcpAr8N1FVu65LXC9xq2dr3H89Mkyl+UbfcSL8+YWG+6gtsCevk1vbl6ibYJ+g20vVQfgmWtrwAAAABJRU5ErkJggg==" />                    </Col>
                    <Col className={"socialNavbarText"} md={{ offset: 0, span: 3 }}>
                        Home
                    </Col>
                </Row>

            </div>




            <div className="boxSidebar">
                <Link as={"div"} to={"/social/chat"}>
                    <Row>
                        <Col className={"socialNavbarImg"} md={{ offset: 2, span: 3 }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvt1r9LVmEUwPGPtDi0GDnY4OZSBE3tpSS4KDTU1tDQkENDEE3V4hAE1tAgjg42BEZEBWH/QISSi5O0RoGLQ0Q/OHKuPO/F1x/c19eh91nu5bnnnO9zfjz3nD7HtPqOiWs/8AAu4BxOH/CQ37GGFWy202kHPoNnuHpAWDuxF5hGHKZl7QY+iw8Yagit1DcwinjurDp4GJ8wmBIv8RzLhzxEgMLTqdQL6MXS8zp4CZMpfBdPDgmsiz/Aw9ycw61KoASHt1/zQ+TmekNopf4O4/iFKNat+FCCb2I+paOSVzsEvoL3aWsCb+vg+5hJgRP40yHwKfxIW3fwtA6OXERO6vud4P9NI4+qnJeh7oE7EeLKRi/ULfe4V1xHUVwR1bjLXQl1dLpv6cXt7HZdAV/DYoIv42M3PD6JzxjJMSjGp99HDe7Ha4ylt/fweLd+XF6nSw0rK4aJG9l/w9SbHDC2vd3L44bcFvVXiDz/LHfL7lQWQVNwTBtfMIsFVP/qHbslON7PIxp3kxVXZ70qonaG9hvomxxgT93/D/wPwsNYHwYJ4jYAAAAASUVORK5CYII=" />                    </Col>
                        <Col className={"socialNavbarText"} md={{ offset: 0, span: 3 }}>
                            Message
                        </Col>
                    </Row>
                </Link>
            </div>


            <div className="boxSidebar" onClick={() => {
                setProfileClick(!profileClick)
                displays("theirProfiles", user._id)
            }}>
                <Row>
                    <Col className={"socialNavbarImg"} md={{ offset: 2, span: 3 }}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvhJREFUSEvF1lnIp3MUB/DP2PcsU7bGlmUsF25kDeXCjSWKaJAiMmUpKdLQjDUmhQtxQcakoZBdcWEkYy3ZZWzJkjXJTNSg73Se6Xmfnvf9P//XW++5ep7f75zzPef8zjbHLNGcWcI1LvDGOAJ7Ydcy+jt8iTexbqgjQ4H3wzU4DdtPovwXPIFb8MUoA0YBb4VbsRDxdgj9jduxBPnupamA98SzOHgIWg/PWzgJP/bJTwZ8IF7FjtMEbcS+xZH4pqunD3hnvIPd/ydoI/4xDsOfbX19wI/gzBkCbdTciSumAp6PWDjTlCRLCX7fKO56/CDOGwN1Fa7GKyWzOS7EDdiho+dmXNsHvCl+xTZ4AffjOhzSY0iAUtevTWLkFjin5OcVz2fYvw/4BLxUFxcUcH53wdHYBx8U2O9jRCUGPFT8AY4BE1rm+XigGFK7H3WUH4cP8fMkoHOr5ld27tMPvqqzk/FMF/gq3FYM6VhrWwpex+H4A8fi3Y7yQ+udt8Ub1c8bli2xpn6S2cnwCR5fiaXFsF2B5DeevtwCur7aYRs7ubC4dXA8Gs+jq3maYNzRBT4bD5dwyurT+k4I0/TjTehUPNXx+BQ8WWeJSvKheZKD6olyfRbSJyZ4nHGX8gjFiBUt5QlllCfEXdCGLffhy337Kc7FsmJKB3u7C5ya/gk7YTkiMBP0KM7AD9gN/3aB838vLqrEOqCvuY9pSXS8h81wNy5r5LudK4xpmTl/ESc2Fo4JGPbM7yTlMfgH+9amsl5V35BImBcU0I1YNA3QiNyFS0v2Plzc1tMHnCzOEE9TD2WTSAkNpY2qZC4vgU9wFH4bBZz77FhpGs0i8Dwuwdcj0LNA3FO1H9Ysgmm3TefaID7V6hOPn24Nib/wOJ7D+1hdSbN3Dfr0+tNbu1milprfMAqHeNzwbI28c7IxIRxCmb1ZEG+a7rLXBkkny9zNepsW2EdZbx9D5u6oJxl7od+klrc9Ogv955WQKZtBNGqvHqRkOkyzBvwfRnmJHyvqkzMAAAAASUVORK5CYII=" />
                    </Col>
                    <Col className={"socialNavbarText"} md={{ offset: 0, span: 3 }}>
                        Profile
                    </Col>
                </Row>
            </div>



            <div className="twittear" onClick={() => setShowModal(true)}>
                <Row>

                    <Col className={"socialNavbarText"} md={{ offset: 0, span: 3 }}>
                        Write
                    </Col>
                </Row>
            </div>


            <ModalPublication showModal={showModal} setShowModal={setShowModal} />



        </div>

    )

}

export default SidebarSocial