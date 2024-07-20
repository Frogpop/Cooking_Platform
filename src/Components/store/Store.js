import React from "react";
import { Link } from "react-router-dom";
import './Store.css';

const products = [
    { name: "Кухонный нож", price: "1500 руб.", link: "/store/kitchen-knife", image: "/images/kitchen-knife.jpg" },
    { name: "Сковорода с антипригарным покрытием", price: "2000 руб.", link: "/store/non-stick-pan", image: "/images/non-stick-pan.jpg" },
    { name: "Мерные стаканчики", price: "300 руб.", link: "/store/measuring-cups", image: "/images/measuring-cups.jpg" },
    { name: "Силиконовая лопатка", price: "250 руб.", link: "/store/silicone-spatula", image: "/images/silicone-spatula.jpg" },
    { name: "Набор специй", price: "800 руб.", link: "/store/spice-set", image: "/images/spice-set.jpg" },
    { name: "Кухонные весы", price: "1200 руб.", link: "/store/kitchen-scales", image: "/images/kitchen-scales.jpg" },
    { name: "Блендер", price: "3500 руб.", link: "/store/blender", image: "/images/blender.jpg" },
    { name: "Термометр для мяса", price: "600 руб.", link: "/store/meat-thermometer", image: "/images/meat-thermometer.jpg" },
    { name: "Форма для выпечки", price: "400 руб.", link: "/store/baking-pan", image: "/images/baking-pan.jpg" },
    { name: "Набор ножей для сыра", price: "1500 руб.", link: "/store/cheese-knives", image: "/images/cheese-knives.jpg" }
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
