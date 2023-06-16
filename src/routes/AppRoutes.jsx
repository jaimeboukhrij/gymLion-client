import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/Homepage/HomePage"
import LogInPage from "../pages/LogInPage/LogInPage"
import SignupPage from "../pages/SingUpPage/SingUpPage"
import Nutrition from "../pages//Nutrition/Nutrition"
import PrivateRoute from "./PrivateRoutes"
import RandomFoodPage from "../pages/RandomFoodPage/RandomFoodPage"
import SearchFood from "../pages/SearchFood/SearchFood"
import MealsDay from "../pages/MealsDay/MealsDay"
import Training from "../pages/Training/Training"
import ExcerciseDetail from "../pages/ExcerciseDetail/ExcerciseDetail"
import MyProfile from "../pages/MyProfile/MyProfile"
import Marks from "../pages/Marks/Marks"
import Social from "../pages/Social/Social"
import Chat from "../components/socialComponents/Chat/Chat"
import PrivateChat from "../components/socialComponents/PrivateChat/PrivateChat"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LogIn" element={<LogInPage />} />
            <Route path="/SingUp" element={<SignupPage />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/training" element={<Training />} />

            <Route element={<PrivateRoute />}>
                <Route path="/nutrition/randomFood" element={<RandomFoodPage />} />
                <Route path="/nutrition/searchFood" element={<SearchFood />} />
                <Route path="/nutrition/mealsDay" element={<MealsDay />} />
                <Route path="/training/:idExercise" element={<ExcerciseDetail />} />
                <Route path="/training/marks" element={<Marks />} />
                <Route path="/social" element={<Social />} />
                <Route path="/social/chat" element={<Chat />} />



                <Route path="/myProfile" element={<MyProfile />} />

            </Route>

        </Routes>
    )
}

export default AppRoutes