import { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap"
import "./MealsDay.css"
import CaloriesFoodSearch from "../../components/CaloriesFoodSearch/CaloriesFoodSearch";
import nutritionService from "../../services/nutrition.services";
import { AuthContext } from "../../contexts/auth.context";
import MealsDayPlanBreakfas from "../../components/MealsDayPlanBreakfas/MealsDayPlanBreakfas";
import CalendarMealsDay from "../../components/CalendarMealsDay/CalendarMealsDay";
import MealsDayPlanLunch from "../../components/MealsDayPlanLunch/MealsDayPlanLunch";
import MealsDayPlanDinner from "../../components/MealsDayPlanDinner/MealsDayPlanDinner";
import BarMealDayPlan from "../../components/BarMealDayPlan/BarMealDayPlan";



const MealsDay = () => {

    const { user } = useContext(AuthContext)

    const [date, setDate] = useState(new Date())
    const [changeMeal, setChangeMeal] = useState()
    const [displayBar, setDisplayBar] = useState("")
    const [displayInf, setDisplayInf] = useState()
    const [showBringFood, setShowBirnhFood] = useState()

    const [BreakfastCalories, setBreakfastCalories] = useState()
    const [BreakfastProtein, setBreakfastProtein] = useState()    //Sin uso, es para calcular el total de las proteinas
    const [LunchCalories, setLunchCalories] = useState()

    const [DinnerCalories, setDinnerCalories] = useState()
    const [totalCalories, setTotalCalories] = useState(0)

    const [showAmount, setShowAmount] = useState(100)

    // console.log("-----", BreakfastProtein)



    const [sendFood, setSendFood] = useState({
        breakfast: [],
        lunch: [],
        dinner: [],
        additional: []
    })

    const handleInputChange = e => {
        const { value } = e.target
        setDate(value)

    }

    useEffect(() => {

        if (!BreakfastCalories) setBreakfastCalories(0)
        !DinnerCalories && setDinnerCalories(0)
        !LunchCalories && setLunchCalories(0)

        console.log("----", BreakfastCalories, LunchCalories, DinnerCalories)
        setTotalCalories(BreakfastCalories + LunchCalories + DinnerCalories)

    }, [BreakfastCalories, LunchCalories, DinnerCalories, date])



    useEffect(() => {

        setDisplayBar("")

        nutritionService
            .getMealDayInf(date, user._id)
            .then(({ data }) => setShowBirnhFood(data[0]?.foods))
            .catch((err) => console.log(err))
    }, [date]);



    const deleteProduct = (index, meal) => {
        nutritionService
            .deleteMealDayInf({ index, meal }, date)
            .then(({ data }) => setShowBirnhFood(data?.foods))
            .catch((err) => console.log(err))

    }


    const changesendFood = (elem) => {
        sendFood[changeMeal] = [elem]
        setSendFood(sendFood)
        setDisplayBar("")

        nutritionService
            .getMealDayInf(date, user._id)
            .then(({ data }) => {

                if (!data.length) {
                    nutritionService
                        .saveMealDayInf(sendFood, date)
                        .then(({ data }) => setShowBirnhFood(data.foods))
                        .catch(err => console.log(err))
                }
                else {

                    nutritionService
                        .editMealDayInf(sendFood, date)
                        .then(({ data }) => setShowBirnhFood(data.foods))
                        .catch(err => console.log(err))
                }
            })
    }

    const addButton = (eachMeal) => {
        setSendFood({
            breakfast: [],
            lunch: [],
            dinner: [],
            additional: []
        })
        setChangeMeal(eachMeal)
        setDisplayBar("")
    }

    const changeDisplay = () => setDisplayBar("none")

    useEffect(() => {
        if (displayBar === "none") {
            setDisplayInf("");
        } else {
            setDisplayInf("none");
        }
    }, [displayBar]);


    return (
        <div style={{ paddingTop: "6%" }}>

            <CalendarMealsDay handleInputChange={handleInputChange} />

            <Row>
                <Col md={{ span: 4, offset: 1 }} style={{ displayBar: "" }}>

                    <MealsDayPlanBreakfas addButton={addButton} showBringFood={showBringFood}
                        setBreakfastCalories={setBreakfastCalories} deleteProduct={deleteProduct}
                        setBreakfastProtein={setBreakfastProtein} showAmount={showAmount} date={date} />

                    <MealsDayPlanLunch addButton={addButton} showBringFood={showBringFood}
                        setLunchCalories={setLunchCalories} deleteProduct={deleteProduct} showAmount={showAmount} />

                    <MealsDayPlanDinner addButton={addButton} showBringFood={showBringFood}
                        setDinnerCalories={setDinnerCalories}
                        deleteProduct={deleteProduct} showAmount={showAmount} />

                </Col>


                <Col md={{ span: 5, offset: 1 }} >
                    <p className={"totalCalories"}>Total Calories: {totalCalories} kcal</p>

                    <div style={{ display: `${displayBar}`, marginRight: "70%", marginTop: "-5%" }}>
                        <CaloriesFoodSearch changesendFood={changesendFood} changeDisplay={changeDisplay} setShowAmount={setShowAmount} showAmount={showAmount} />
                    </div>

                    <div style={{ display: `${displayInf}`, height: "500px" }}>
                        <BarMealDayPlan
                            BreakfastCalories={BreakfastCalories}
                            LunchCalories={LunchCalories}
                            DinnerCalories={DinnerCalories}
                            totalCalories={totalCalories} />
                    </div>
                </Col>

            </Row>
        </div>
    )
}


export default MealsDay
