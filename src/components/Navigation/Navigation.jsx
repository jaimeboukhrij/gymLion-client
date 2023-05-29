import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import "./Navigation.css"



function Navigation() {

    const { user, logout } = useContext(AuthContext)

    return (

        <nav>
            <ul className="menu nav-menu">
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/alimentacion">Alimentacion</a>
                    <ul className="menu-item">
                        <li><a href="/alimentacion/randomFood">Get Your Meal</a></li>
                        <li><a href="alimentacion/searchFood">Search Food Details</a></li>

                    </ul>
                </li>
                <li><a href="#">Entrenamiento</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">About us</a></li>

                {
                    user
                        ?

                        <li className='lastLiMenu'>
                            <a href="/alimentacion">Your Profile</a>
                            <ul className="menu-item">
                                <li><a href="/alimentacion/randomFood">My Profile</a></li>
                                <li><a href="#" onClick={logout}>LogOut</a></li>

                            </ul>
                            <li><a href="#"><img src={user.avatar} alt="" /></a></li>
                        </li>

                        :
                        <>
                            <li className='navLogin'><a href="/login">LogIn</a></li>
                            <li className='navSingUp'><a href="/singup">SingUp</a></li>
                        </>

                }

            </ul>
        </nav>)



}

export default Navigation;




