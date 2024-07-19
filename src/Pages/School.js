import React,{Component} from "react";
import schools from "../res/shools.json"
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import styled from "styled-components";
import TList from "../Components/List_of_teachers";
import FormSchool from "../Components/FormSchool";
const Styles = styled.div`
    .jumbo{
        background: url(${props => props.pp}) no-repeat fixed top;
        background-size: cover;
        color: #efefef;
        position: relative;
        z-index: 0;
    }
    .ovv{
      background-color: black;
      opacity: 0.7;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
`
export default class School extends Component{
    constructor(props) {
        super(props);
        this.pp = schools[this.props.id];
    }
    render() {
        return(
            <Styles pp = {this.pp.info.backimg}>
                <h1>{this.pp.name}</h1>
                <Container className="jumbo ms-0 me-0" fluid>
                    <div className="ovv"></div>
                    <Row>
                        <Col>
                            <Image className="mt-4 ms-5 px-5"  src={this.pp.logo} alt = "Schools logo" style={{maxWidth : "400px"}} roundedCircle />
                        </Col>
                        <Col className="pt-3">
                            <p style={{fontSize : 24, fontFamily : "Arial"}}>{this.pp.info.desc}</p>
                        </Col>
                    </Row>
                </Container>
                <h2 align={"center"} style={{paddingTop : '2rem'}}>Наша команда</h2>
                <Container style={{paddingTop : '2rem', paddingBottom : '2rem', alignItems : "center"}} className="me-0">
                    <Row xs={this.pp.info.team.length/3} md={3} className="g-4">
                        {
                            this.pp.info.team.map((item) =>{
                                return(
                                    <Col>
                                        <Card key={item.name} border="secondary" style={{width : '18rem'}}>
                                            <Card.Img variant="top" src = {item.img}/>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                    <h6 style={{color : "#808080"}}>{item.position}</h6>
                                                    {item.desc}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
                <h2 align='center' style={{paddingBottom : '1rem'}}> Преподавательский состав</h2>
                <TList teachers = {this.pp.info.teachers}/>
                <h2 align='center' style={{paddingTop : '2rem', paddingBottom : '1rem'}}>Надумали записаться к нам? Заполните форму прямо сейчас!</h2>
                <FormSchool/>
            </Styles>
        )
    }
}