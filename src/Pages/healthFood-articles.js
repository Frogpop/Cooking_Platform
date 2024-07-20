import React,{Component} from "react";
import {Container, Row} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .jumbo{
      background: url(${"https://jvolosy.com/wp-content/uploads/2023/02/functional-medicine-nutrition.jpg"}) no-repeat fixed top;
      background-size: cover;
      color: #efefef;
      height: 400px;
      position: relative;
      z-index: -2;
    }
    .overlay{
      color : #000;
      opacity: 0.7;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
`;
export default class HealthFoodArticles extends Component{
    render() {
        return(
            <Styles>
                <div style={{display : "flex", justifyContent : "center"}} className="mt-4">
                    <Container >
                        <div className="overlay"></div>
                        <Container className="jumbo">
                            <Row>
                                <h2> Здоровье - это важно!</h2>
                            </Row>
                            <Row>
                                <p>
                                    Здоровое питание – это основа хорошего самочувствия и долголетия. Оно помогает поддерживать оптимальный вес, укрепляет иммунитет, снижает риск развития многих заболеваний и улучшает общее состояние организма.
                                    На этой странице мы собрали статьи, которые помогут вам разобраться в основах здорового питания, узнать о полезных продуктах. Вы узнаете, как правильно выбирать продукты, готовить вкусные и полезные блюда, а также получите множество советов и рекомендаций от экспертов в области питания.
                                </p>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </Styles>
        );
    }
}