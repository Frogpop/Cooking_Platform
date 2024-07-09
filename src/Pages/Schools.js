import React,{useState} from "react";
import {Container, ListGroup, Modal} from "react-bootstrap";
import logo from '../Components/logo192.png'
export default function Schools(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <ListGroup>
                <ListGroup.Item onClick={handleShow}>Лофт</ListGroup.Item>
            </ListGroup>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Лофт</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <img src={logo} alt="school-logo"/>
                        <p>Что-то там и т.д.</p>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}