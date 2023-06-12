import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Modal, Button } from 'react-bootstrap';
import "./SearchGym.css"

class GymSearch extends Component {
    constructor(props) {
        super(props);
        this.autocomplete = null;
        this.state = {
            selectedPlaceId: '',
            showModal: false
        };
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleModalConfirm = this.handleModalConfirm.bind(this);
    }

    componentDidMount() {
        this.autocomplete = new this.props.google.maps.places.Autocomplete(
            document.getElementById('place-input'),
            { types: ['establishment'], componentRestrictions: { country: 'es' } }
        );

        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    handlePlaceSelect() {
        const place = this.autocomplete.getPlace();

        if (place && place.place_id) {
            this.setState({ selectedPlaceId: place.place_id, showModal: true });
        }
    }

    handleModalClose() {
        this.setState({ showModal: false });
    }

    handleModalConfirm() {
        const { selectedPlaceId } = this.state;
        const { updateSelectedGym } = this.props;

        // Actualizar el estado en el componente padre
        updateSelectedGym(selectedPlaceId);

        this.setState({ showModal: false });
    }

    render() {
        const { showModal } = this.state;

        return (
            <div>
                <input id="place-input" type="text" placeholder=" Search Your Gym..." />

                <Modal show={showModal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Gym Selection</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to select this gym?</p>
                        {/* Puedes mostrar información adicional sobre el gimnasio aquí */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.handleModalConfirm}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBtc80oZ9lOnbwQODIRr0lG8MOlhxpXb94',
})(GymSearch);
