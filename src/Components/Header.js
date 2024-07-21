import React,{Component} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import logo from '../res/logo192.png'
import schools from '../res/shools.json'
import Home from "../Pages/Home";
import Test from "../Pages/Test";
import About from "../Pages/About"
import Bloggers from "./Bloggers/Bloggers"
import BloggerProfile from "./Bloggers/BloggerProfile";
import Store from "./store/Store";
import ProductDetail from "./ProductDetail";
import ArticleDetail from "./ArticleDetail";
import Formulas from "../Pages/Formulas/Formulas";
import Formulatemplate from "../Pages/Formulas/Formulatemplate";
import TipsPage from "../Pages/Tips";
import HealthFoodArticles from "../Pages/health/healthFood-articles";
import HealthFoodRecipes from "../Pages/health/healthFood-recipes";
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
                                <Nav.Link href="/"> Главная</Nav.Link>
                                <Nav.Link href="/test">Test</Nav.Link>
                                <Nav.Link href="/schools">Школы</Nav.Link>
                                <Nav.Link href="/formulas">Рецепты</Nav.Link>
                                <Nav.Link href="/bloggers">Кулинарные блогеры</Nav.Link>
                                <Nav.Link href="/store">Магазин</Nav.Link>
                                <Nav.Link href="/tips">Советы</Nav.Link>
                                <NavDropdown title="Здоровое питание">
                                    <NavDropdown.Item href="/healthfood-articles">Статьи</NavDropdown.Item>
                                    <NavDropdown.Item href="/healthfood-recipes">Рецепты</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/about">О нас</Nav.Link>
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
                        <Route exat path="/about" element={<About/>}/>
                        <Route exat path="/bloggers" element={<Bloggers/>}/>
                        <Route exat path="/schools" element={<ListOfSchools/>}/>
                        <Route path="/bloggers/anna-petrova" element={<BloggerProfile/>}/>
                        <Route path="/store" element={<Store/>}/>
                        <Route path="/store/:productId" element={<ProductDetail/>}/>
                        <Route path="/articles/:articleId" element={<ArticleDetail/>}/>
                        <Route exat path="/батин борщ" element={<Formulatemplate/>}/>
                        <Route exat path="/formulas" element={<Formulas/>}>
                        </Route>
                        <Route exat path="/tips" element={<TipsPage/>}/>
                        <Route exat path="/healthfood-articles" element={<HealthFoodArticles/>}/>
                        <Route exat path="/healthfood-recipes" element={<HealthFoodRecipes/>}/>
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