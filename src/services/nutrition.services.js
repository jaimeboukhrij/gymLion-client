import axios from 'axios'

class NutritionService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/nutrition`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }


    getMealDayInf(date, idOwner) {
        return this.api.get(`/mealDayPlan/${date}/${idOwner}`)
    }


    saveMealDayInf(idMeals, date) {
        return this.api.post(`/mealDayPlan/${date}`, idMeals)
    }

    editMealDayInf(idMeals, date) {
        return this.api.put(`/mealDayPlan/${date}`, idMeals)
    }

    deleteMealDayInf({ index, meal }, date) {

        return this.api.put(`/mealDayPlan/delete/${date}`, { index, meal })
    }

    getUserFavouriteNutrition() {
        return this.api.get(`/favouriteFood`)
    }

    saverUserFavouriteNutrition(idFood) {

        return this.api.put(`/favouriteFood/${idFood}`)
    }

    deleteUserFavouriteFood(idFood) {
        console.log("en services")
        return this.api.put(`/favouriteFood/delete/${idFood}`)
    }







}

const nutritionService = new NutritionService()

export default nutritionService