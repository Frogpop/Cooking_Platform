import React, {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";
import tips from '../res/tips.json'
export default class ListOfTips extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tips: tips[this.props.category]
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.setState({
                tips: tips[this.props.category]
            });
        }
    }

    render() {
        return(
            <Row md={4} style={{display : "flex", justifyContent : "center"}}>
                    {
                        this.state.tips.map((item) =>{
                            return(
                                <Card as={Col} className="mx-3 mb-4 pt-3">
                                    <Card.Img src={item.img} alt="tips-image"/>
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                                {item.desc}
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }

            </Row>
        );
    }
}