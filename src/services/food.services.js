function getMealData(calories, setMealData) {
    fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=0d4111f1c8114aa7afe4173220dcc660&timeFrame=day&targetCalories=${calories}`
    )
        .then((response) => response.json())
        .then((data) => {
            setMealData(data);
        })
        .catch(() => {
            console.log("error");
        });
}

export default getMealData

