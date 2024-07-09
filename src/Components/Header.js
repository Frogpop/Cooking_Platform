import React,{Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from './logo192.png'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Test from "../Pages/Test";
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
                        {/*
                            Тут по шаблону добавляем в роутер страницы
                        */}
                    </Routes>
                </Router>
            </>
        );
    }
}