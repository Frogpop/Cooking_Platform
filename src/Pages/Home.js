import React from "react";
import GroupList from "../Components/GroupList";
import NewsList from "../Components/NewsList";
import {Container} from "react-bootstrap";

// Пример данных для популярных рецептов, акций и новостей
const popularRecipes = [
    { name: "Спагетти Карбонара", link: "/recipes/spaghetti-carbonara" },
    { name: "Куриный карри", link: "/recipes/chicken-curry" },
    { name: "Бефстроганов", link: "/recipes/beef-stroganoff" }
];

const promotions = [
    { name: "Скидка 20% на все блюда из пасты!", link: "/promotions/pasta-discount" },
    { name: "Купите 1 десерт и получите второй бесплатно", link: "/promotions/dessert-bogo" }
];

const newsItems = [
    { title: "Как приготовить идеальный борщ: советы от шеф-повара", link: "/news/borscht-tips" },
    { title: "Новинки на нашей платформе: новые рецепты и функции", link: "/news/platform-updates" },
    { title: "Интервью с известным шеф-поваром Иваном Ивановым", link: "/news/interview-ivanov" },
    { title: "10 полезных продуктов для здорового питания", link: "/news/healthy-foods" },
    { title: "Как организовать кухню: советы для начинающих", link: "/news/kitchen-organization" }
];

export default function Home() {
    return (

        <Container className={"mt-5"}>
            <center><h1>Добро пожаловать на наш кулинарный сайт!</h1>
            <p>Откройте для себя вкусные рецепты и потрясающие акции.</p></center>

            <div className={"mt-2"}>
                <GroupList inputitems={popularRecipes} iheader="Популярные рецепты" />
            </div>

            <div className={"mt-3"}>
                <GroupList inputitems={promotions} iheader="Текущие акции" />
            </div>

            <div className={"mt-3"}>
                <NewsList newsItems={newsItems} header="Новости и статьи" />
            </div>
        </Container>
    );
}
