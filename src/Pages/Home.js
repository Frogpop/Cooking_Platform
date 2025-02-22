import React from "react";
import GroupList from "../Components/GroupList";
import Promotions from "../Components/Promotions";
import NewsAndArticles from "../Components/NewsAndArticles";
import Bloggers from "../Components/Bloggers/Bloggers";
import { Container } from "react-bootstrap";

// Пример данных для популярных рецептов
const popularRecipes = [
    { name: "Спагетти Карбонара", link: "/recipes/spaghetti-carbonara" },
    { name: "Куриный карри", link: "/recipes/chicken-curry" },
    { name: "Бефстроганов", link: "/recipes/beef-stroganoff" }
];

export default function Home() {
    return (
        <Container className="mt-5">
            <center>
                <h1>Добро пожаловать на наш кулинарный сайт!</h1>
                <p>Откройте для себя вкусные рецепты и потрясающие акции.</p>
            </center>

            <div className="mt-2">
                <GroupList inputitems={popularRecipes} iheader="Популярные рецепты" />
            </div>

            <div className="mt-3">
                <Promotions />
            </div>

            <div className="mt-3">
                <NewsAndArticles />
            </div>

            <div className="mt-3">
                <Bloggers />
            </div>
        </Container>
    );
}
