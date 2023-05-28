import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Homepage/HomePage"
import LogInPage from "../pages/LogInPage/LogInPage"
import SignupPage from "../pages/SingUpPage/SingUpPage"
import Alimentacion from "../pages//Alimentacion/Alimentacion"
import PrivateRoute from "./PrivateRoutes"
import RandomFoodPage from "../pages/RandomFoodPage/RandomFoodPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LogIn" element={<LogInPage />} />
            <Route path="/SingUp" element={<SignupPage />} />
            <Route path="/alimentacion" element={<Alimentacion />} />

            <Route path="/alimentacion" element={<PrivateRoute />}>
                <Route path="/alimentacion/randomFood" element={<RandomFoodPage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes