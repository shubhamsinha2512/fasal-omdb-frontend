import { Dropdown } from 'bootstrap';
import { Button } from 'bootstrap';
import { Modal } from 'bootstrap';
import React, { useContext, useState } from 'react'
import { Col, DropdownButton, InputGroup, Row } from 'react-bootstrap';
import { MovieContext } from '../../Context/MovieContext';

function ListModal() {

    const MovieCtx = useContext(MovieContext);

    const [show, setShow] = useState(false);
    const [listName, setListName] = useState('');
    const [listType, setListType] = useState('Public');

    const handleShow = e => {
        setShow(true)
    }

    const handleHide = e => {
        setShow(false)
    }

    const handleListTypeChange = e => {
        setListType(e)
    }

    const handleListNameChange = e => {
        setListName(e.target.value)
    }

    const handleSubmit = e => {

    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New List
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Row className='d-flex flex-wrap'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ListName</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter List Name" 
                            name="listName" 
                            value={listName} 
                            onChange={handleListNameChange} 
                            />
                    </Form.Group>

                    <InputGroup>
                        <DropdownButton
                            variant="outline-secondary"
                            title={listType}
                            value={listType}
                            align="end"
                            onSelect={handleListTypeChange}
                        >
                            <Dropdown.Item eventkey={'Public'}>Public</Dropdown.Item>
                            <Dropdown.Item eventkey={'Private'}>Private</Dropdown.Item>
                        </DropdownButton>

                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                        >
                            Add List
                        </Button>
                    </InputGroup>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ListModal