import { Col, Row } from "react-bootstrap"
import MyResponsivePie from "../MyResponsivePie/MyResponsivePie"
import { useEffect, useState } from "react"
import nutritionService from "../../services/nutrition.services"

const LeyendFoodSearch = ({ showFoodInf, foodId }) => {

    const [showAmountCarbs, setShowAmountCarbs] = useState()
    const [showAmountFat, setShowAmountFat] = useState()
    const [showAmountProtein, setShowAmountProtein] = useState()
    const [checkFavourite, setCheckFavourite] = useState(false)



    useEffect(() => {
        AmountMacros()

        nutritionService
            .getUserFavouriteNutrition()
            .then(({ data }) => {
                data.includes(foodId.toString()) ? setCheckFavourite(true) : setCheckFavourite(false)
            })
            .catch(err => console.log(err))
    }, [showFoodInf])




    const AmountMacros = () => {
        const nutrients = showFoodInf?.nutrients || [];
        const carbs = nutrients.find(elem => elem.name === "Carbohydrates");
        const protein = nutrients.find(elem => elem.name === "Protein");
        const fat = nutrients.find(elem => elem.name === "Fat");

        setShowAmountCarbs(carbs?.amount || 0);
        setShowAmountProtein(protein?.amount || 0);
        setShowAmountFat(fat?.amount || 0);
    }


    useEffect(() => {

        checkFavourite
            ?
            nutritionService
                .saverUserFavouriteNutrition(foodId)
                .then(() => console.log("añadido a favortios", foodId))
                .catch(err => console.log(err))

            :
            nutritionService
                .deleteUserFavouriteFood(foodId)
                .then(() => console.log("eliminado de favortios", foodId))
                .catch(err => console.log(err))

    }, [checkFavourite])

    return (
        <>
            <Row>

                <Col md={{ span: 1, offset: 0 }} >
                    <div style={{ background: "red", width: "30px", margin: "30px 10px 0 0" }}>.</div>
                    <div style={{ background: "blue", width: "30px", margin: "10px 0" }}>.</div>
                    <div style={{ background: "yellow", width: "30px", margin: "10px 0" }}>.</div>
                </Col>

                <Col md={{ span: 4, offset: 0 }} >
                    <div style={{ color: "white", margin: "30px 10px 0 0" }}>{`Protein: (${parseInt(showAmountProtein)}) g`}</div>
                    <div style={{ color: "white", margin: "10px 0" }}>{`Carbs:  (${parseInt(showAmountCarbs)}) g`}</div>
                    <div style={{ color: "white", margin: "10px 0 0 0" }}>{`Fat: (${parseInt(showAmountFat)}) g`}</div>
                </Col>

                <Col md={{ span: 4, offset: 2 }} >
                    <div className="iconCardDetail">
                        <input id="toggle-heart" type="checkbox" onClick={() => setCheckFavourite(!checkFavourite)} checked={checkFavourite} />
                        <label for="toggle-heart" aria-label="like">❤</label>

                    </div>
                </Col>



            </Row>
            <MyResponsivePie className={"data"} showFoodInf={showFoodInf} />
        </>

    )

}


export default LeyendFoodSearch