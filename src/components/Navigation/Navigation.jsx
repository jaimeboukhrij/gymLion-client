import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import "./Navigation.css"



function Navigation() {




    const { user, logout } = useContext(AuthContext)



    return (
        <nav>
            <div className="logo">
                <img src="../../../../lion.png" alt="Logo Image" />
            </div>
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="#">Alimentación</a></li>
                <li><a href="#">Entrenamiento</a></li>
                <li><a href="#">LionClub</a></li>

                {user
                    ?
                    <li> <Nav.Link as="a" onClick={logout}>Cerrar sesión</Nav.Link></li>
                    :
                    <>
                        <li><Link to={"/login"} ><button className="login-button" >LogIn</button></Link></li>
                        <li><Link to={"/singup"}><button className="join-button" href="#">SingUp</button></Link></li>
                    </>
                }

            </ul>
        </nav>
    );
}

export default Navigation;