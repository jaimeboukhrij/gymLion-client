import axios from 'axios';

class FoodService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://api.spoonacular.com",
            params: {
                'apiKey': 'f249a02562124893ba2adf489a106fc2',
            }
        })
    }

    getMeals(calories) {
        return this.api.get(`/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}`);
    }

    getMealInf(idMeal) {
        return this.api.get(`/recipes/${idMeal}/information?includeNutrition=true`);

    }

    searchFood(query) {
        return this.api.get(`food/ingredients/autocomplete?query=${query}&number=6&metaInformation=true`);

    }

    getIngredientsRecipes(recipeId) {
        return this.api.get(`/recipes/${recipeId}/ingredientWidget.json?`)
    }

    getFoodInf(foodId, amount) {
        return this.api.get(`food/ingredients/${foodId}/information?amount=${amount}&unit=grams`)
    }

    getRecipeCard(recipeId) {
        console.log("-----", recipeId)
        return this.api.get(`/recipes/${recipeId}/card`)

    }

    getNutritionWidget(id) {
        return this.api.get(`/food/products/${id}/nutritionWidget.png`)
    }



}

const foodService = new FoodService();

export default foodService;

