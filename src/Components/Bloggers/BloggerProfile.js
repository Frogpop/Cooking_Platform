import React from "react";
import {Container} from "react-bootstrap";
import './BloggerProfile.css';

const blogger = {
    name: "Анна Петрова",
    profileImage: "/images/anna-petrova.jpg",
    description: "Эксперт по выпечке и десертам",
    bio: "Анна Петрова – известный кулинарный блогер, специализирующийся на выпечке и десертах. Она делится своими секретами приготовления вкусных и красивых блюд.",
    recipes: [
        { name: "Торт Наполеон", link: "/recipes/napoleon-cake" },
        { name: "Шоколадный фондан", link: "/recipes/chocolate-fondant" },
        { name: "Кексы с кремом", link: "/recipes/cream-cupcakes" }
    ],
    articles: [
        { title: "Советы по приготовлению вкусных блюд", link: "/articles/cooking-tips" },
        { title: "10 рецептов на каждый день", link: "/articles/everyday-recipes" }
    ]
};

export default function BloggerProfile() {
    return (
        <Container className={"mt-3"}>
            <center><h1>{blogger.name}</h1></center>
            <p>{blogger.description}</p>
            <p>{blogger.bio}</p>

            <h2 className={"mt-3"}>Рецепты</h2>
            <ul className="list-group">
                {blogger.recipes.map(recipe => (
                    <a href={recipe.link} className="list-group-item list-group-item-action" key={recipe.name}>
                        {recipe.name}
                    </a>
                ))}
            </ul>

            <h2 className={"mt-3"}>Статьи</h2>
            <ul className="list-group">
                {blogger.articles.map(article => (
                    <a href={article.link} className="list-group-item list-group-item-action" key={article.title}>
                        {article.title}
                    </a>
                ))}
            </ul>
        </Container>
    );
}
