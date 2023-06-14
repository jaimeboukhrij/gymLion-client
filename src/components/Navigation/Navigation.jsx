import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import "./Navigation.css"





function Navigation() {

    const { user, logout } = useContext(AuthContext)

    return (

        <nav style={{ display: "", marginBottom: "2%" }}>
            <ul className="menu nav-menu">
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/nutrition">NUTRITION</a>

                </li>

                <li>
                    <a href="/training">Training</a>

                </li>


                <li>
                    <a href="/social">Social</a>

                </li>


                {
                    user
                        ?
                        <>
                            <li style={{ height: "95px", width: "350px" }}>
                                <a href="/myProfile">My Profile</a>

                                <a href="#"><img src={user.avatar} alt="" /></a>
                            </li>


                            <li ><a href="#" onClick={logout}>LogOut</a></li>



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



