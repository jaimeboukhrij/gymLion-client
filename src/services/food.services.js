import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const NutritionalInfoComponent = () => {
    const [foodQuery, setFoodQuery] = useState('');
    const [foodResults, setFoodResults] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleFoodSearch = async (query) => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=0d4111f1c8114aa7afe4173220dcc660&query=${query}`
            );
            const results = response.data;

            setFoodResults(results);
        } catch (error) {
            console.error('Error al buscar alimentos:', error);
        }
    };

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };

    const debouncedFoodSearch = debounce(handleFoodSearch, 300);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setFoodQuery(value);
        debouncedFoodSearch(value);
    };

    const handleFoodSelection = (food) => {
        setSelectedFood(food);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h2>Buscar Alimento</h2>
            <Form.Group controlId="foodQuery">
                <Form.Label>Buscar</Form.Label>
                <Form.Control
                    type="text"
                    value={foodQuery}
                    onChange={handleInputChange}
                    placeholder="Escribe el nombre del alimento"
                />
            </Form.Group>

            <h2>Resultados</h2>
            <ul>
                {foodResults.map((result) => (
                    <li key={result.id} onClick={() => handleFoodSelection(result)}>
                        {result.name}
                    </li>
                ))}
            </ul>

            {selectedFood && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Información Nutricional</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{selectedFood.name}</h4>
                        {/* Mostrar la información nutricional del alimento */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default NutritionalInfoComponent;
