import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from './../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/auth.context"

const LogInForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    const { password, email } = loginData

    return (
        <Form onSubmit={handleSubmit}>
            <div className="logIncard">
                <h2 className="title">Bienvenido a GymLion</h2>
                <div className="inputBox">
                    <input type="email" value={email} onChange={handleInputChange} required="required" name="email" />
                    <span className="user">Email</span>
                </div>

                <div className="inputBox">
                    <input type="password" value={password} onChange={handleInputChange} name="password" required="required" />
                    <span>Password</span>
                </div>
                <button type="submit" className="enter">Enter</button>
            </div>
        </Form>
    )
}

export default LogInForm
