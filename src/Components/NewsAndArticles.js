import React from 'react';
import { Link } from 'react-router-dom';
import './NewsAndArticles.css';

const articles = [
    { id: "cooking-tips", title: "Советы по приготовлению вкусных блюд", author: "Анна Петрова", description: "Узнайте, как приготовить вкусные блюда с нашими советами!", image: "https://avatars.mds.yandex.net/i?id=553afe9de485741fc8f32b7ac8440fd417c9fe99-5123535-images-thumbs&n=13" },
    { id: "platform-news", title: "Новости нашей платформы", author: "Команда Cooking Platform", description: "Последние новости и обновления нашей платформы.", image: "https://avatars.mds.yandex.net/i?id=9a62a04f93a8ac2d007d1a8fa8953dffa28290fef9b92898-10246869-images-thumbs&n=13" },
    { id: "chef-interview", title: "Интервью с шеф-поваром Иваном Ивановым", author: "Мария Смирнова", description: "Эксклюзивное интервью с шеф-поваром Иваном Ивановым.", image: "https://avatars.mds.yandex.net/i?id=16af8c2269d7c2b7ac1654ede3011bd958930829-12365785-images-thumbs&n=13" },
    { id: "everyday-recipes", title: "10 рецептов на каждый день", author: "Анна Петрова", description: "Откройте для себя 10 простых и вкусных рецептов на каждый день.", image: "https://avatars.mds.yandex.net/i?id=1b9bb72064f4f5f8e05294133a1ef28bf045f1b3da75a15a-9182048-images-thumbs&n=13" },
    { id: "healthy-eating", title: "Полезные советы для здорового питания", author: "Мария Смирнова", description: "Как питаться правильно и сохранять здоровье.", image: "https://avatars.mds.yandex.net/i?id=661dca476cff7a1f5b07356974116ee42693828dd2f4e779-5283698-images-thumbs&n=13" }
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
