import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Homepage/HomePage"
import LogInPage from "../pages/LogInPage/LogInPage"
import SignupPage from "../pages/SingUpPage/SingUpPage"
import Alimentacion from "../pages/Homepage/Alimentacion/Alimentacion"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LogIn" element={<LogInPage />} />
            <Route path="/SingUp" element={<SignupPage />} />
            <Route path="/alimentacion" element={<Alimentacion />} />

        </Routes>
    )
}

export default AppRoutes