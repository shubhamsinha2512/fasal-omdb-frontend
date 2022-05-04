import React, { useContext, useState } from 'react'
import { Col, DropdownButton, Form, InputGroup, Row, Dropdown, Button, Modal } from 'react-bootstrap';
import { MovieContext } from '../../Context/MovieContext';

function ListModal({ show, setShow }) {

    const MovieCtx = useContext(MovieContext);

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
        let prvt = listType == 'Private' ? true : false;
        MovieCtx.createNewList(listName, prvt)
        handleHide()
    }

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleHide}
        >
            <Modal.Header closeButton className='bg-dark text-white'>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New List
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Row className='d-flex flex-wrap'>
                    <Form.Label>ListName</Form.Label>

                    <InputGroup>
                        <Form.Control
                            type="email"
                            placeholder="Enter List Name"
                            name="listName"
                            value={listName}
                            onChange={handleListNameChange}
                        />
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
                <Button variant="danger" onClick={handleHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ListModal