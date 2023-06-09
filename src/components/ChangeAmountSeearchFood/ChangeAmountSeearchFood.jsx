import { Form, InputGroup } from "react-bootstrap";

const ChangeAmountSeearchFood = ({ setShowAmount, showAmount }) => {

    const handleInputChange = (event) => {
        setShowAmount(event.target.value);
    };

    return (
        <InputGroup size="sm" style={{ width: "100px" }}>
            <Form.Control
                onChange={handleInputChange} value={showAmount} />
            <InputGroup.Text>g</InputGroup.Text>
        </InputGroup>
    )

}


export default ChangeAmountSeearchFood