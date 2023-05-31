import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Homepage/HomePage"
import LogInPage from "../pages/LogInPage/LogInPage"
import SignupPage from "../pages/SingUpPage/SingUpPage"
import Nutrition from "../pages//Nutrition/Nutrition"
import PrivateRoute from "./PrivateRoutes"
import RandomFoodPage from "../pages/RandomFoodPage/RandomFoodPage"
import SearchFood from "../pages/SearchFood/SearchFood"
import MealsDay from "../pages/MealsDay/MealsDay"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LogIn" element={<LogInPage />} />
            <Route path="/SingUp" element={<SignupPage />} />
            <Route path="/nutrition" element={<Nutrition />} />

            <Route path="/nutrition" element={<PrivateRoute />}>
                <Route path="/nutrition/randomFood" element={<RandomFoodPage />} />
                <Route path="/nutrition/searchFood" element={<SearchFood />} />
                <Route path="/nutrition/mealsDay" element={<MealsDay />} />

            </Route>

        </Routes>
    )
}

export default AppRoutes