import { useContext } from 'react'
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import "./Navigation.css"



function Navigation() {

    const { user, logout } = useContext(AuthContext)

    const profileLogo = `Bienvenido, ${user?.firstName}`

    return (

        <nav>
            <ul className="menu nav-menu">
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/alimentacion">Alimentacion</a>
                    <ul className="menu-item">
                        <li><a href="/alimentacion/randomFood">A comer</a></li>
                        <li><a href="#">Graphics design</a></li>

                    </ul>
                </li>
                <li><a href="#">Entrenamiento</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">About us</a></li>
                <li>
                    <a href="/login">LogIn</a>
                    <ul className="menu-item">
                        <li><a href="/singup">SingUp</a></li>

                    </ul>
                </li>
            </ul>
        </nav>)



}

export default Navigation;




