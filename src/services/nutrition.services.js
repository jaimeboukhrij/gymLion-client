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


    getMealDayInf(idUser) {
        return this.api.get(`/mealDayPlan/${idUser}`)
    }


    saveMealDayInf(idMeals) {
        return this.api.post(`/mealDayPlan`, idMeals)
    }



}

const nutritionService = new NutritionService()

export default nutritionService