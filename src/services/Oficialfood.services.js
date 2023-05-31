import axios from 'axios';

class OficialfoodServices {
    constructor() {

        this.api = axios.create({
            baseURL: "https://api.spoonacular.com"
        });
    }

    getIngredientsRecipes(recipeId) {
        return this.api.get(`/recipes/${recipeId}/ingredientWidget.json?apiKey=0d4111f1c8114aa7afe4173220dcc660`)
    }

    getImage(imgName) {
        return this.api.get(`/cdn/ingredients_100x100/${imgName}`)
    }
}

const OficialfoodService = new OficialfoodServices();


export default OficialfoodService;

