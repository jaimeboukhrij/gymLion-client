import { Form, InputGroup } from "react-bootstrap";

const ChangeAmountSeearchFood = ({ setShowAmount, showAmount }) => {

    const handleInputChange = (event) => {
        setShowAmount(event.target.value);
    };

    return (
        <InputGroup size="xl" style={{ width: "100px", position: "relative", top: "10%", left: "45%" }}>
            <Form.Control
                onChange={handleInputChange} value={showAmount} />
            <InputGroup.Text>g</InputGroup.Text>
        </InputGroup>
    )

}


export default ChangeAmountSeearchFood