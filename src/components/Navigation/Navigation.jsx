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
                    <a href="/nutrition">NUTRITION</a>
                    <ul className="menu-item">

                        <li><a href="/nutrition/mealsDay">Get Your MealDay</a></li>
                        <li><a href="/nutrition/randomFood">Get Your Meal</a></li>
                        <li><a href="/nutrition/searchFood">Search Food Details</a></li>

                    </ul>
                </li>

                <li>
                    <a href="/training">Training</a>
                    <ul className="menu-item">

                        <li><a href="/training/marks">My marks</a></li>


                    </ul>
                </li>


                {
                    user
                        ?

                        <li className='lastLiMenu'>
                            <a href="/myProfile">My Profile</a>
                            <ul className="menu-item">
                                <li><a href="#" onClick={logout}>LogOut</a></li>
                            </ul>
                            <a href="#"><img src={user.avatar} alt="" /></a>
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




