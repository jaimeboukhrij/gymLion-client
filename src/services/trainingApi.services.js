import axios from 'axios'

class TrainingApiServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/training`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }


    getUserFavouriteExercise() {
        return this.api.get(`/favouriteExercise`)
    }

    saveUserFavouriteExercise(idExcercise) {
        return this.api.put(`/favouriteExercise/${idExcercise}`)
    }

    deleteUserFavouriteExercise(idExcercise) {
        return this.api.put(`/favouriteExercise/delete/${idExcercise}`)
    }

    getUserMarks(showExercise) {
        console.log("en get")
        return this.api.get(`/mark/${showExercise}`)
    }

    editUserMarks(mark) {

        return this.api.put(`/addMark`, mark)
    }
    deleteUserMarks() {
        console.log("en delete")

        return this.api.put(`/deleteMark`)
    }








}

const trainingApiServices = new TrainingApiServices()

export default trainingApiServices