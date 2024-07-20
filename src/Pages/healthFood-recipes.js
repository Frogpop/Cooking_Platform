import React,{useState} from "react";
import ModalRecipes from "../Components/ModalRecipes";
import { Card, Container, Row} from "react-bootstrap";
import recipes from '../res/health-recipes.json'

export default function HealthFoodRecipes(){
    const [id, setId] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setShow(true);
        setId(item);
    };
    return(
        <div  className="mt-4">
            <Container>
                <Row style={{display :"flex", justifyContent : "center"}}>
                    <h2>Рецепты, которые помогут следить за здоровьем</h2>
                </Row>
                <Row>
                    {
                        recipes.map((item)=>{
                            return(
                                <Card onClick={() => handleShow(item.id)} className="mt-3 pt-3">
                                    <Card.Img src={item.img} alt="recipe-iamge" style={{width : '300px'}}/>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Body>{item.short}</Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container>
            <ModalRecipes id={id} show={show} handleClose={handleClose} />
        </div>
    );
}