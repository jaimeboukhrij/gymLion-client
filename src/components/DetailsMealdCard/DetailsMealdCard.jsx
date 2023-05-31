import { useEffect, useState } from "react"
import "./DetailsMealdCard.css"
import foodService from "../../services/food.services"
import { Row, Col } from "react-bootstrap"
import MyResponsivePie from "../MyResponsivePie/MyResponsivePie"


const DetailsMealdCard = ({ id }) => {

    const [showIng, setShowIng] = useState()
    const [dataMeal, setDataMeal] = useState()

    useEffect(() => {
        foodService
            .getIngredientsRecipes(id)
            .then(({ data }) => setShowIng(data.ingredients))
            .catch(err => console.log(err))

        foodService
            .getMealInf(id)
            .then(({ data }) => setDataMeal(data))
            .catch(err => console.log(err))

    }, []);


    let dataVivo = [
        {
            "id": "Carbs",
            "label": "Carbs",
            "value": dataMeal?.nutrition.caloricBreakdown.percentCarbs,
            "color": "hsl(240, 70%, 30%)"

        },
        {
            "id": "Fat",
            "label": "Fat",
            "value": dataMeal?.nutrition.caloricBreakdown.percentFat,
            "color": "hsl(157, 70%, 50%)"
        },
        {
            "id": "Protein",
            "label": "Protein",
            "value": dataMeal?.nutrition.caloricBreakdown.percentProtein,
            "color": "hsl(286, 70%, 50%)"
        },

    ]

    console.log(dataMeal)

    return (

        (showIng && dataMeal)
            ?
            <div className="bodyModal">


                <img src={dataMeal.image} alt="" />

                <h1>{dataMeal.title}</h1>

                <Row className="ingredientes">

                    <h2 style={{ textAlign: "left" }}>Ingredients</h2>
                    {showIng.map((elem, index) => {

                        const img = `https://spoonacular.com/cdn/ingredients_100x100/${elem.image}`
                        const { value, unit } = elem.amount.metric

                        return (

                            <Col md={4} key={index}>

                                <h3>{elem.name}</h3>
                                <img style={{ width: "200px", height: "200px" }} src={img} alt="" />

                                <div className="metric">
                                    <p>{value}  {unit}</p>
                                </div>

                            </Col>
                        )
                    })
                    }
                </Row>


                <div className="instructions">
                    <h2 style={{ textAlign: "left" }}>Instructions</h2>
                    {
                        dataMeal.analyzedInstructions.map(({ name, steps }) => {

                            const stepsArr = steps.map((elm, index) => {

                                let styleP
                                (index % 2 == 0) ? styleP = { color: "grey" } : styleP = { color: "wheat" }

                                return (<p key={index} style={styleP}>{elm.number}{"- "}{elm.step}</p>)
                            })

                            return (
                                <div>
                                    <h6>{name}</h6>
                                    {stepsArr}
                                </div>
                            )

                        })
                    }


                </div>

                <div className="Macros">
                    <h2 style={{ textAlign: "left" }}>Macros</h2>

                    <MyResponsivePie data={dataVivo} />

                </div>



            </div >
            :
            <p>loading</p>


    )

}


export default DetailsMealdCard