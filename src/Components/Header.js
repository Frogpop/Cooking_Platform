import React,{Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import logo from './logo192.png'
import schools from '../res/shools.json'
import Home from "../Pages/Home";
import Test from "../Pages/Test";
import ListOfSchools from "../Pages/ListOfSchools";
import School from "../Pages/School";
import About from "../Pages/About"
import Bloggers from "../Components/Bloggers"
import ListOfTips from "./ListOfTips";
import BloggerProfile from "./BloggerProfile";
import Store from "./Store";
import ProductDetail from "./ProductDetail";
import ArticleDetail from "./ArticleDetail";
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
                                <Nav.Link href="/"> Главная</Nav.Link>
                                <Nav.Link href="/test">Test</Nav.Link>
                                <Nav.Link href="/store">Магазин</Nav.Link>
                                <Nav.Link href="/schools">Школы</Nav.Link>
                                <Nav.Link href="/formulas">Рецепты</Nav.Link>
                                <Nav.Link href="/bloggers">Кулинарные блогеры</Nav.Link>
                                <Nav.Link href="/tips">Советы</Nav.Link>
                                <Nav.Link href="/about">О нас</Nav.Link>
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
                        <Route exat path="/about" element={<About/>}/>
                        <Route exat path="/bloggers" element={<Bloggers/>}/>
                        <Route exat path="/tips" element={<ListOfTips/>}/>
                        <Route exat path="/schools" element={<ListOfSchools/>}/>
                        <Route path="/bloggers/anna-petrova" element={<BloggerProfile/>}/>
                        <Route path="/store" element={<Store/>}/>
                        <Route path="/store/:productId" element={<ProductDetail/>}/>
                        <Route path="/articles/:articleId" element={<ArticleDetail/>}/>
                        {schools.map((item)=>{
                            return(
                                <Route exat path={`/schools/${item.alt_name}`} element={<School id = {item.id}/>}/>
                            )
                        })}
                        {/*
                            Тут по шаблону добавляем в роутер страницы
                        */}
                    </Routes>
                </Router>
            </>
        );
    }
}