import React from "react";
import { Link } from "react-router-dom";
import './Store.css';

const products = [
    { name: "Кухонный нож", price: "1500 руб.", link: "/store/kitchen-knife", image: "https://klinok-bulat.ru/wa-data/public/shop/products/87/11/1187/images/6275/6275.500x0.jpg" },
    { name: "Сковорода с антипригарным покрытием", price: "2000 руб.", link: "/store/non-stick-pan", image: "https://avatars.mds.yandex.net/i?id=029e2e2e4682d38cf9b9d9ec3d16198959b5bd6a-12468199-images-thumbs&n=13" },
    { name: "Мерные стаканчики", price: "300 руб.", link: "/store/measuring-cups", image: "https://i1.stat01.com/3/416/204157979/075a3e/stakan-laboratornyj-vysokij-v-1-25-25-ml-graduirovannyj.jpg" },
    { name: "Силиконовая лопатка", price: "250 руб.", link: "/store/silicone-spatula", image: "https://avatars.mds.yandex.net/i?id=900f69f35b9f19460d1fd777a1da214ca9fdd6b2-10871820-images-thumbs&n=13" },
    { name: "Набор специй", price: "800 руб.", link: "/store/spice-set", image: "https://avatars.mds.yandex.net/i?id=b464d3ac8ff381f0db0affd22601d0fe896977ef-5383525-images-thumbs&n=13" },
    { name: "Кухонные весы", price: "1200 руб.", link: "/store/kitchen-scales", image: "https://avatars.mds.yandex.net/i?id=d4b473ea1ae8cbf2aff291cccb4c1534a6b418bdfe1cca1e-13094487-images-thumbs&n=13" },
    { name: "Блендер", price: "3500 руб.", link: "/store/blender", image: "https://avatars.mds.yandex.net/i?id=06179c8fb4996d3c7353d915ce515ca7e85316cafe8768a3-12737181-images-thumbs&n=13" },
    { name: "Термометр для мяса", price: "600 руб.", link: "/store/meat-thermometer", image: "https://avatars.mds.yandex.net/i?id=22d6a5584de42da60baea8a09d728b81d8682a21-5326992-images-thumbs&n=13" },
    { name: "Форма для выпечки", price: "400 руб.", link: "/store/baking-pan", image: "https://avatars.mds.yandex.net/i?id=c0378debffde630f08ecceb1963bfb5627ace54f-5468312-images-thumbs&n=13" },
    { name: "Набор ножей для сыра", price: "1500 руб.", link: "/store/cheese-knives", image: "https://avatars.mds.yandex.net/i?id=c7d4f0054208626380db91fe61b40aa5-5341800-images-thumbs&n=13" }
];

export default function Store() {
    return (
        <div className="store-container">
            <h1>Онлайн-магазин</h1>
            <p>Добро пожаловать в наш онлайн-магазин кухонной утвари, ингредиентов и аксессуаров!</p>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.name}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <Link to={product.link} className="btn btn-primary">Купить</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
