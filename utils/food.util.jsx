const getNutriInfo = () => {

    setShowbreakfast([]);
    setShowBringBreakfast(showBringFood?.breakfast)
    const allPromises =
        showBringFood?.breakfast?.map((idFood, index) =>
            foodService.getFoodInf(idFood, 100).then((res) => res.data)
        );
    if (allPromises) {
        Promise.all(allPromises)
            .then((response) => {
                setShowbreakfast(response);
                const totalCalories = response.reduce(
                    (total, elem) =>
                        total +
                        elem.nutrition.nutrients.find((elem) =>
                            elem.name.includes("Calories")
                        ).amount,
                    0
                );
                setShowBreakfastCalories(parseInt(totalCalories));
            })
            .catch((err) => console.log(err));
    }



}