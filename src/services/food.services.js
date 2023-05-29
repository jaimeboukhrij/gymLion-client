import axios from 'axios';

class FoodService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            headers: {
                'X-RapidAPI-Key': '999cef8629msh1d645ba25963b8ep182047jsnf05459ad076d',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        });
    }

    getMeals(calories) {
        return this.api.get(`recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}`);
    }

    getMealInf(idMeal) {
        return this.api.get(`/recipes/${idMeal}/information`);

    }

    searchFood(query) {
        return this.api.get(`food/ingredients/autocomplete?query=${query}&number=10&metaInformation=true`);

    }
}

const foodService = new FoodService();

export default foodService;

