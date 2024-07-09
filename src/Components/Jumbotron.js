import React, {Component} from "react";
import { Container} from 'react-bootstrap'
import styled from "styled-components"
import image from '../Pages/Contacts/Contacts_background.jpg'
const Styles = styled.div`
  .jumbo {
    background: url(${image}) no-repeat fixed center;
    background-size: cover;
    text-align: left;
    padding-left: 30px;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: 0;
  }
  .overlay{
    background-color: black;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export default class Jumbotron extends Component{
    constructor(props) {
        super(props);
        this.state ={
            continf :`Тел.: +7-959-658-95-36
E-mail: kulplat@ogo.com
Адрес: просп. Ленина, 30`
        }
    }
    render() {
        return(
            <>
                <Styles>
                    <Container fluid="md" className="jumbo">
                        <div className="overlay"></div>
                        <Container>
                            <h1>Кулинарная платформа</h1>
                            <p style={{whiteSpace: 'pre'}}>{this.state.continf}</p>
                        </Container>
                    </Container>
                </Styles>
            </>
        );
    }
}