import axios from 'axios'

class YtService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://youtube-search-and-download.p.rapidapi.com/search?&type=v&query=",
            headers: {
                'X-RapidAPI-Key': 'd06e30e105mshadd8ddf94f9f185p133fb2jsn121b18afb4c8',
                'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
            }
        });
    }

    getExcerciseVideo(name) {
        return this.api.get(`${name}`);
    }











}

const ytService = new YtService()

export default ytService