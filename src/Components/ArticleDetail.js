import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetail.css';

const articles = {
    "cooking-tips": {
        title: "Советы по приготовлению вкусных блюд",
        author: "Анна Петрова",
        content: `
            <p>Приготовление вкусных блюд требует внимания к деталям и следования нескольким простым правилам. Вот несколько советов, которые помогут вам стать мастером на кухне:</p>
            <h3>Используйте свежие ингредиенты</h3>
            <p>Свежие ингредиенты всегда лучше замороженных или консервированных. Они придают блюду более насыщенный вкус и аромат.</p>
            <h3>Правильная подготовка</h3>
            <p>Перед началом приготовления убедитесь, что все ингредиенты подготовлены и нарезаны. Это сэкономит ваше время и сделает процесс более организованным.</p>
            <h3>Не бойтесь экспериментов</h3>
            <p>Добавляйте новые специи, меняйте ингредиенты и пробуйте новые рецепты. Это сделает ваши блюда разнообразными и интересными.</p>
            <h3>Следите за временем</h3>
            <p>Не переваривайте и не пересушивайте еду. Точное время приготовления важно для сохранения вкусовых качеств продуктов.</p>
            <h3>Правильная сервировка</h3>
            <p>Подача блюда также важна, как и его приготовление. Красивая сервировка делает еду еще вкуснее и аппетитнее.</p>
            <p>Следуйте этим советам, и ваши блюда всегда будут вкусными и аппетитными!</p>
        `,
        image: "https://avatars.mds.yandex.net/i?id=3d7f38551e07db4165c92fab9521aba903bd6def-5284027-images-thumbs&n=13"
    },
    "everyday-recipes": {
        title: "10 рецептов на каждый день",
        author: "Анна Петровна",
        content: `<p>Рецепты....................</p>`,
        image: "/images/everyday-recipes.jpg"
    }
    // Другие статьи можно добавить здесь
};

export default function ArticleDetail() {
    const { articleId } = useParams();
    const article = articles[articleId];

    if(!article){
        return <p>Статья не найдена</p>;
    }
    return (
        <div className="article-detail-container">
            <h1>{article.title}</h1>
            <p className="author">Автор: {article.author}</p>
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
    );
}
