import axios from 'axios';

class Training {
    constructor() {
        this.api = axios.create({
            baseURL: "https://exercisedb.p.rapidapi.com/exercises",
            headers: {
                'X-RapidAPI-Key': 'd06e30e105mshadd8ddf94f9f185p133fb2jsn121b18afb4c8',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        });
    }

    getBodyPartExer() {
        return this.api.get(`/bodyPartList`);
    }
    getOneBodyPartExer(part) {
        return this.api.get(`/bodyPart/${part}`);
    }

    getOneBodyTagExer(tag) {
        return this.api.get(`/target/${tag}`);
    }

    getExcerciseById(idExcercise) {
        return this.api.get(`/exercise/${idExcercise}`);
    }

    getExcerciseByEquipment(equipment) {
        return this.api.get(`/equipment/${equipment}`);
    }

    getExcerciseById(idExcercise) {
        return this.api.get(`/exercise/${idExcercise}`);
    }














}


const training = new Training();

export default training

