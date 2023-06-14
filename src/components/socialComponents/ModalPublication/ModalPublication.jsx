import React, { useState, useRef, useEffect } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import "./ModalPublication.css"
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/auth.context';
import ImageUploader from '../../ImageUploader/ImageUploader';
import socialService from '../../../services/social.services';



const ModalPublication = ({ showModal, setShowModal }) => {
    const { user } = useContext(AuthContext);
    const [text, setText] = useState();
    const [selectedImage, setSelectedImage] = useState(null);
    const [urlCloudinary, setUrlCloudinary] = useState()
    const fileInputRef = useRef(null);


    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleWriteClick = async () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append('file', selectedImage);
            formData.append('upload_preset', 'ysg6er97');

            try {
                const response = await axios.post('https://api.cloudinary.com/v1_1/djpeqlbo6/image/upload', formData);
                const imageUrl = response.data.secure_url;
                setUrlCloudinary(imageUrl)
                setSelectedImage(null)


            } catch (error) {
                console.error('Error al cargar la imagen en Cloudinary:', error);
            }
        }
        else {
            setUrlCloudinary("")
            setSelectedImage(null)

        }


        setShowModal(false);
    };

    useEffect(() => {
        console.log("dentro del if", urlCloudinary)
        socialService
            .savePost({ text, urlCloudinary })
            .catch(e => console.log(e));
        setText()

    }, [urlCloudinary]);

    return (
        <Modal show={showModal} onHide={() => {
            setText()
            setShowModal(false)
            setSelectedImage(null)
        }} size="lg">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col md={{ offset: 0, span: 10 }}>
                            <div className="imgTweet" style={{ backgroundImage: `url(${user.avatar})` }}></div>
                        </Col>
                        <Col md={{ offset: 1, span: 10 }}>
                            <textarea
                                value={text}
                                onChange={handleChange}
                                style={{ height: `${text?.split('\n').length * 20}px` }}
                                placeholder="What's Happening?!?!"
                            />
                            {selectedImage && (
                                <img src={selectedImage} alt="Selected" style={{ marginTop: '10px', width: '100%' }} />
                            )}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer >
                <Row style={{ marginRight: "50%" }} >
                    <Col className={"socialNavbarImg"} md={{ offset: 0, span: 1 }}>
                        <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                            <img width="30" height="35" src="https://img.icons8.com/ios/50/228BE6/picture.png" alt="picture" />
                        </label>
                        <input id="fileInput" type="file" onChange={handleFileInputChange} ref={fileInputRef} style={{ display: "none" }} />
                    </Col>

                    <Col className={"socialNavbarImg"} md={{ offset: 0, span: 1 }}>
                        <img width="30" height="40" src="https://img.icons8.com/ios/50/228BE6/gif--v1.png" alt="gif--v1" />
                    </Col>

                    <Col className={"socialNavbarImg"} md={{ offset: 0, span: 1 }}>
                        <img width="30" height="40" src="https://img.icons8.com/ios/50/228BE6/survey.png" alt="survey" />
                    </Col>
                </Row>
                <Button
                    style={{ padding: "10px 40px", borderRadius: "50px", background: "#1D9BF0", fontFamily: "sans-serif", fontSize: "1.5em" }}
                    onClick={handleWriteClick}
                >
                    Write
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalPublication;
