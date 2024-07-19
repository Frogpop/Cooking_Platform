import React,{Component} from "react";
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";

export default class TipsPage extends Component{
    render() {
        return(
            <>
                <h2>Советы</h2>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>sdsd</ListGroup.Item>
                                    <ListGroup.Item>sdsd</ListGroup.Item>

                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}