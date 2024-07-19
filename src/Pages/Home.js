import React, { Component } from "react";
import GroupList from "../Components/GroupList";

// Пример данных для популярных рецептов и акций
const popularRecipes = [
    { name: "Спагетти Карбонара", link: "/recipes/spaghetti-carbonara" },
    { name: "Курица кари", link: "/recipes/chicken-curry" },
    { name: "Бефстроганов", link: "/recipes/beef-stroganoff" }
];

const promotions = [
    { name: "Скидка 20% на всю пасту!", link: "/promotions/pasta-discount" },
    { name: "Купи 1 десерт и получи второй в подарок!", link: "/promotions/dessert-bogo" }
];

export default function Home() {
    return (
        <div>
            <h1>Добро пожаловать на наш кулинарный сайт!</h1>
            <p>Откройте для себя вкусные рецепты и крутые акции.</p>

            <div>
                <GroupList inputitems={popularRecipes} iheader="Популярные рецепты" />
            </div>

            <div>
                <GroupList inputitems={promotions} iheader="Текущие акции" />
            </div>
        </div>
    );
}
