import { Typography } from "@mui/material"
import "./ProfileFood.css"
import FoodCardProfile from "../FoodCardProfile/FoodCardProfile"
import { useEffect, useState } from "react"
import nutritionService from "../../services/nutrition.services"


const ProfileFood = () => {

    const [showBringFavFood, setBringFavFood] = useState()


    useEffect(() => {

        nutritionService
            .getUserFavouriteNutrition()
            .then(({ data }) => setBringFavFood(data))
            .catch(err => console.log(err))

    }, [])


    return (
        <div style={{ marginTop: "20%" }}>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '150px' }} fontWeight={700} color="white" mb="-300px" mt="-180px">
                <span style={{ color: 'purple', textTransform: 'capitalize' }}>Your Favourite Food</span>
            </Typography>
            <FoodCardProfile showBringFavFood={showBringFavFood} />
        </div>




    )

}


export default ProfileFood