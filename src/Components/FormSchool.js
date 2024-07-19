import React,{useState} from "react";
import {Container, Form, Row, Col, Button, InputGroup, Card} from "react-bootstrap";

export default function FormSchool(){
    const [validated, setValidated] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return(
        <div style={{ display : "flex", justifyContent : "center", paddingBottom : '2rem'}}>
            <Card style={{width : '60rem', height :'20rem'}} >
                <Card.Title className="mt-3 ms-4" style={{fontSize : "23px"}}>Пожалуйста, заполнените данные</Card.Title>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Container>
                            <Row className="mb-3" md ="3">
                                <Form.Group as={Col} controlId="validationName">
                                    <Form.Label>Имя</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ваше имя"/>
                                    <Form.Control.Feedback type= "invalid" > Пожалуйста заполните ваше имя </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationSurname">
                                    <Form.Label>Фамилия</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ваша фамилия"/>
                                    <Form.Control.Feedback type= "invalid" > Пожалуйста заполните вашу фамилию </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationPatronymic">
                                    <Form.Label>Отчество</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ваше отчество"/>
                                </Form.Group>

                            </Row>
                            <Row className="mb-4" md ="3">
                                <Form.Group as={Col} controlId="validationPhone">
                                    <Form.Label>Телефон</Form.Label>
                                    <Form.Control
                                        required
                                        type = "tel"
                                        pattern="^\+?[0-9\s\-]+$"
                                        placeholder="Ваш телефон"/>
                                    <Form.Control.Feedback type="invalid"> Ввыедите свой телефон</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type = "email"
                                        placeholder="Ваш email"/>
                                    <Form.Control.Feedback type="invalid"> Ввыедите свой email</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCourse">
                                    <Form.Label>Выберите кулинарный курс</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Select
                                            aria-label="Выберите вариант"
                                            required
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                        >
                                            <option value="">Выберете...</option>
                                            <option value="confectioner">Кондитер</option>
                                            <option value="mastic">Мастика</option>
                                            <option value="cheese_maker">Сыроварение</option>
                                            <option value="baker">Пекарное дело</option>
                                            <option value="wine_expert">Винный эксперт</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">Пожалуйста, выберите вариант.</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Button type="submit">Готово</Button>
                        </Container>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}