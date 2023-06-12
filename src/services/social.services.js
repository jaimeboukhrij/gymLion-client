import axios from 'axios'

class SocialService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/social`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }


    savePost(data) {
        return this.api.post(`/postCreate`, data)
    }


    getPost() {
        return this.api.get(`/post`)
    }













}

const socialService = new SocialService()

export default socialService