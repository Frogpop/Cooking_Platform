import React,{Component} from "react";
import {Accordion, Container, Image, Row} from "react-bootstrap";
import styled from "styled-components";
import articles from '../../res/health-articles.json'

const Styles = styled.div`
  .jumbo {
    background: url(${"https://avatars.mds.yandex.net/i?id=cb4e0a76a267ed9265b1a8a0bf88110323080ec74d228c9c-4408252-images-thumbs&n=13"}) no-repeat fixed center;
    background-size: cover;
    text-align: left;
    padding-left: 30px;
    color: #efefef;
    height: 400px;
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

export default class HealthFoodArticles extends Component{
    render() {
        return(
            <>
                <Styles>
                    <div className="jumbo">
                        <div className="overlay"></div>
                        <Container className="pt-4">
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
                    </div>
                    <Container className="mt-3" defaultActiveKey="0">
                        <Accordion>
                            {
                                articles.map((item) =>{
                                    return(
                                        <Accordion.Item eventKey={item.id}>
                                            <Accordion.Header>{item.name}</Accordion.Header>
                                            <Accordion.Body>
                                                <div>
                                                    <Image src ={item.img} alt="article-image" roundedCircle height="400px"/>
                                                    <p>
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )
                                })
                            }
                        </Accordion>
                    </Container>
                </Styles>
            </>
        );
    }
}