import "./SingUpform.css"

import React, { useState, useCallback } from "react";
import { Form, Button, Row, Col } from "react-bootstrap"
import authService from './../../services/auth.services'
import { useNavigate } from "react-router-dom"
import ImageUploader from "../ImageUploader/ImageUploader"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        firstName: '',
        secondName: "",
        profileImg: ""
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target

        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()



        authService
            .signup(signupData)
            .then(({ data }) => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const profImg = useCallback((url) => {
        setSignupData((prevData) => ({ ...prevData, profileImg: url }));
    }, []);


    const { firstName, secondName, password, email } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <div className="SingUpcard">
                <h2 className="title">¡COMENCEMOS!</h2>


                <div className="inputBox">
                    <input type="email" value={email} onChange={handleInputChange} required="required" name="email" />
                    <span className="user">Email</span>
                </div>




                <div className="inputBox">
                    <input type="password" value={password} onChange={handleInputChange} name="password" required="required" />
                    <span>Password</span>
                </div>


                <div className="inputBox">
                    <input type="text" value={firstName} onChange={handleInputChange} name="firstName" required="required" />
                    <span>Nombre</span>
                </div>

                <div className="inputBox">
                    <input type="text" value={secondName} onChange={handleInputChange} name="secondName" required="required" />
                    <span>Apellido</span>
                </div>

                <div className="inputBox">
                    <ImageUploader profImg={profImg} />
                    <span>Imagen Perfil</span>
                </div>

                <button className="enter">Enter</button>
            </div>s

        </Form>
    )
}

export default SignupForm