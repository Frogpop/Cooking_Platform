import React from "react";
import {Col, Container, Image, Modal, Row} from "react-bootstrap";
import recipes from '../res/health-recipes.json'
export default function ModalRecipes({show, handleClose, id}){
    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{recipes[id].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Image src={recipes[id].img} alt="recipe-image" className="mt-3 mb-3 ml-2 mr-2" style={{minWidth : "150px", maxWidth : "300px", minHeight : "200px", maxHeight : "250px"}} />
                            </Col>

                            <Col>
                                <ul>
                                    {recipes[id].ing.map((it)=>{
                                        return(
                                            <li key={it.id}>{it.name}</li>
                                        )
                                    })}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            {recipes[id].desc}
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}