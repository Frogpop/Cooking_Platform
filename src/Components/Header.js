import React,{Component} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import logo from './logo192.png'
import schools from '../res/shools.json'
import Home from "../Pages/Home";
import Test from "../Pages/Test";
import HealthFoodArticles from "../Pages/healthFood-articles";
import HealthFoodRecipes from "../Pages/healthFood-recipes";
import ListOfSchools from "../Pages/Schools/ListOfSchools";
import School from "../Pages/Schools/School";
import Contacts from "../Pages/Contacts/Contacts";
export default class Header extends Component{
    render() {
        return(
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home</Nav.Link>
                                <Nav.Link href="/test">Test</Nav.Link>
                                <NavDropdown title="Здоровое питание">
                                    <NavDropdown.Item href="/healthfood-articles">Статьи</NavDropdown.Item>
                                    <NavDropdown.Item href="/healthfood-recipes">Рецепты</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/schools">Школы</Nav.Link>
                                <Nav.Link href="/contacts">Контакты</Nav.Link>
                                {/*
                                    Тут по шаблону добавляем кнопки в навигацию
                                */}
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exat path="/" element={<Home/>}/>
                        <Route exat path="/test" element={<Test/>}/>
                        <Route exat path="/healthfood-articles" element={<HealthFoodArticles/>}/>
                        <Route exat path="/healthfood-recipes" element={<HealthFoodRecipes/>}/>
                        <Route exat path="/schools" element={<ListOfSchools/>}/>
                        {schools.map((item)=>{
                            return(
                                <Route exat path={`/schools/${item.alt_name}`} element={<School id = {item.id}/>}/>
                            )
                        })}
                        <Route exat path="/contacts" element={<Contacts/>}/>
                        {/*
                            Тут по шаблону добавляем в роутер страницы
                        */}
                    </Routes>
                </Router>
            </>
        );
    }
}