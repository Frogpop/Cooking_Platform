import React,{Component} from "react";
import {Button, Col, Container, Image, Modal, Row} from "react-bootstrap";
import schools from "../res/shools.json";
class GetData extends Component{
    render() {
        return(
            <Row>
                <Col>
                    <Image src={schools[this.props.item].logo} alt="school-logo" className="mt-3 mb-3 ml-2 mr-2" style={{minWidth : "150px", maxWidth : "300px", minHeight : "200px", maxHeight : "250px"}} />
                </Col>
                <Col>
                    <p>{ schools[this.props.item].desc}</p>
                </Col>
            </Row>
        )
    };
}
export default class ModelSchool extends Component{
    render() {
        return(
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{schools[this.props.item].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <GetData item = {this.props.item}/>
                        </Container>
                        <Button variant="primary" href={`/schools/${schools[this.props.item].alt_name}`}>Подробнее</Button>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}