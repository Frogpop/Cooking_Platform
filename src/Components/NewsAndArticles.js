import React from 'react';
import { Link } from 'react-router-dom';
import './NewsAndArticles.css';

const articles = [
    { id: "cooking-tips", title: "Советы по приготовлению вкусных блюд", author: "Анна Петрова", description: "Узнайте, как приготовить вкусные блюда с нашими советами!", image: "/images/cooking-tips.jpg" },
    { id: "platform-news", title: "Новости нашей платформы", author: "Команда Cooking Platform", description: "Последние новости и обновления нашей платформы.", image: "/images/platform-news.jpg" },
    { id: "chef-interview", title: "Интервью с шеф-поваром Иваном Ивановым", author: "Мария Смирнова", description: "Эксклюзивное интервью с шеф-поваром Иваном Ивановым.", image: "/images/chef-interview.jpg" },
    { id: "everyday-recipes", title: "10 рецептов на каждый день", author: "Анна Петрова", description: "Откройте для себя 10 простых и вкусных рецептов на каждый день.", image: "/images/everyday-recipes.jpg" },
    { id: "healthy-eating", title: "Полезные советы для здорового питания", author: "Мария Смирнова", description: "Как питаться правильно и сохранять здоровье.", image: "/images/healthy-eating.jpg" }
];

export default function NewsAndArticles() {
    return (
        <div className="news-articles-container">
            <h2>Новости и статьи</h2>
            <div className="row">
                {articles.map((article, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <Link to={`/articles/${article.id}`}>
                                <img src={article.image} className="card-img-top" alt={article.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <p className="card-author">Автор: {article.author}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
