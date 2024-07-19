import React,{Component} from "react";
import {Accordion, Col, Container, Image, Row} from "react-bootstrap";
export default class TList extends Component{
    render() {
        return(
           <div style={{ display : "flex", justifyContent : "center"}}>
               <Accordion defaultActiveKey={['0']}  >
                   {this.props.teachers.map((item) =>{
                       return(
                           <Accordion.Item eventKey={item.id} style={{width :'1000px'}}>
                               <Accordion.Header>{item.pos}</Accordion.Header>
                               <Accordion.Body>
                                   <Container>
                                       <Row>
                                           <Col>
                                               <Image src={item.img} alt="Teacher iamge" roundedCircle  style={{width : '20rem'}} className="ms-5"/>
                                           </Col>
                                           <Col>
                                               <h2 style={{whiteSpace: "pre-line"}}>{item.name}</h2>
                                               <p>{item.desc}</p>
                                           </Col>
                                       </Row>
                                   </Container>
                               </Accordion.Body>
                           </Accordion.Item>
                       )
                   })}
               </Accordion>
           </div>
        );
    }
}