import React,{Component} from "react";
import { Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import ListOfTips from "../Components/ListOfTips";

export default class TipsPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cat : "culinary"
        }
        this.handleChange = this.handleChange.bind(true);
    }
    handleChange = (st) =>{
        this.setState({
            cat : st
        })
    }
    render() {
        return(
            <div>
                <Container>
                    <Row className="mt-5">
                        <Col className="col-md-9 ">
                            <ListOfTips category={this.state.cat}/>
                        </Col>
                        <Col className="col-md-2 me-0">
                            <Card style={{ position: 'sticky', top: '70px', width : '20rem'}}>
                                <Card.Title className="mt-3" style={{ display : "flex", justifyContent : "center"}}>Категории советов</Card.Title>
                                <Card.Body>
                                    <ListGroup  variant="flush" >
                                        <ListGroup.Item onClick={() => this.handleChange("culinary")}>Кулинарные лайфхаки</ListGroup.Item>
                                        <ListGroup.Item onClick={() => this.handleChange("products")}>Советы по выбору продуктов</ListGroup.Item>
                                        <ListGroup.Item onClick={() => this.handleChange("utensils")}>Советы по выбору кухонной утвари</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}