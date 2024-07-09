import React from "react";
import { Container} from 'react-bootstrap'
import styled from "styled-components"
import {Jumbotron as Jumbo} from 'reactstrap'
import image from '../Pages/Contacts/Contacts_background.jpg'
const Styles = styled.div`
  .jumbo {
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
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
const Jumbotron = () =>{
    <Styles>
        <Jumbo fuild className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Кулинарная платформа</h1>
                <p>
                    Тел.: +7-959-658-95-36
                    E-mail: kulplat@ogo.com
                    Адрес: просп. Ленина, 30
                </p>
            </Container>
        </Jumbo>
    </Styles>
}
export default Jumbotron;