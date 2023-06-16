import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import "./Navigation.css"





function Navigation() {

    const { user, logout } = useContext(AuthContext)

    return (

        <nav id='navTop' style={{ display: "", marginBottom: "0", background: "transparent" }}>
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
                            <li style={{ marginTop: "0%" }} ><a style={{ color: "red" }} href="#" onClick={logout}>LogOut</a></li>

                            <li style={{ height: "70px", width: "140px" }}>
                                <a href="/myProfile"></a>

                                <a style={{ marginTop: "22%" }} href="#"><img src={user.avatar} alt="" /></a>
                            </li>





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



