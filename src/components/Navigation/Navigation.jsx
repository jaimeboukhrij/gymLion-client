import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import "./Navigation.css"





function Navigation() {

    const { user, logout } = useContext(AuthContext)

    return (

        <nav style={{ display: "" }}>
            <ul className="menu nav-menu">
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/nutrition">NUTRITION</a>

                </li>

                <li>
                    <a href="/training">Training</a>

                </li>


                {
                    user
                        ?
                        <>
                            <li className='lastLiMenu'>
                                <a href="/myProfile">My Profile</a>

                                <a href="#"><img src={user.avatar} alt="" /></a>
                            </li>


                            <li><a href="#" onClick={logout}>LogOut</a></li>



                        </>

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




