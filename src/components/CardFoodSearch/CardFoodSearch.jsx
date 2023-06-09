import { Card, Nav } from "react-bootstrap"

const CardFoodSearch = ({ setShowModalMenu, barDataInf }) => {

    return (
        <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                    <Nav.Link onClick={() => setShowModalMenu("CaloricBreakdown")}>CaloricBreakdown</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        setShowModalMenu("nutrientsDetail")
                        barDataInf()
                    }} href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#Nose">Nose</Nav.Link>
                </Nav.Item>
            </Nav>
        </Card.Header>
    )

}


export default CardFoodSearch