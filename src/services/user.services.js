import axios from 'axios'

class UserApiServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }


    getOneUser = (_id) => this.api.get(`/${_id}`)

    addGym = (_idGym) => this.api.put(`/${_idGym}`)

    gymMembers = () => this.api.get(`/gymMembers/list`)






}

const userApiServices = new UserApiServices()

export default userApiServices