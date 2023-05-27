import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SingUpform/SingUpform'
import "./SingUpPage.css"


const SignupPage = () => {

    return (

        <div className="SingUp">

            <img className="imgSingUp" src="../../../imgLogin.png" alt="" />
            <SignupForm />




        </div>

    )
}

export default SignupPage