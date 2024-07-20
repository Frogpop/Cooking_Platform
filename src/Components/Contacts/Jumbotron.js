import React, {Component} from "react";
import { Container} from 'react-bootstrap'
import styled from "styled-components"
import image from '../../Pages/Contacts/Contacts_background.jpg'
const Styles = styled.div`
  .jumbo {
    background: url(${image}) no-repeat fixed center;
    background-size: cover;
    text-align: left;
    padding-left: 30px;
    color: #efefef;
    height: 600px;
    width: 100%;
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
                    <div className="jumbo pt-4">
                        <div className="overlay"></div>
                        <Container>
                            <h1 style={{fontSize :"46px"}}>Кулинарная платформа</h1>
                            <p style={{whiteSpace: 'pre', fontSize : "24px"}}>{this.state.continf}</p>
                        </Container>
                    </div>
                </Styles>
            </>
        );
    }
}