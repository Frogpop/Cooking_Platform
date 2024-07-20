import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ProductDetail.css';

const productDetails = {
    "kitchen-knife": {
        name: "Кухонный нож",
        price: "1500 руб.",
        description: "Высококачественный кухонный нож для любых целей.",
        image: "/images/kitchen-knife.jpg"
    },
    "non-stick-pan": {
        name: "Сковорода с антипригарным покрытием",
        price: "2000 руб.",
        description: "Отличная сковорода с антипригарным покрытием, идеально подходит для жарки без масла.",
        image: "/images/non-stick-pan.jpg"
    },
    "measuring-cups": {
        name: "Мерные стаканчики",
        price: "300 руб.",
        description: "Набор мерных стаканчиков для точного измерения ингредиентов.",
        image: "/images/measuring-cups.jpg"
    },
    "silicone-spatula": {
        name: "Силиконовая лопатка",
        price: "250 руб.",
        description: "Удобная силиконовая лопатка для выпечки и приготовления пищи.",
        image: "/images/silicone-spatula.jpg"
    },
    "spice-set": {
        name: "Набор специй",
        price: "800 руб.",
        description: "Разнообразный набор специй для улучшения вкуса ваших блюд.",
        image: "/images/spice-set.jpg"
    },
    "kitchen-scales": {
        name: "Кухонные весы",
        price: "1200 руб.",
        description: "Точные кухонные весы для измерения ингредиентов.",
        image: "/images/kitchen-scales.jpg"
    },
    "blender": {
        name: "Блендер",
        price: "3500 руб.",
        description: "Мощный блендер для приготовления смузи, соусов и многого другого.",
        image: "/images/blender.jpg"
    },
    "meat-thermometer": {
        name: "Термометр для мяса",
        price: "600 руб.",
        description: "Точный термометр для измерения температуры мяса и других продуктов.",
        image: "/images/meat-thermometer.jpg"
    },
    "baking-pan": {
        name: "Форма для выпечки",
        price: "400 руб.",
        description: "Удобная форма для выпечки тортов, пирогов и других десертов.",
        image: "/images/baking-pan.jpg"
    },
    "cheese-knives": {
        name: "Набор ножей для сыра",
        price: "1500 руб.",
        description: "Набор ножей для нарезки различных видов сыра.",
        image: "/images/cheese-knives.jpg"
    }
};

export default function ProductDetail() {
    const { productId } = useParams();
    const product = productDetails[productId];

    if (!product) {
        return <p>Продукт не найден</p>;
    }

    return (
        <div className="product-detail-container">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to="/store" className="btn btn-secondary">Назад в магазин</Link>
            <button className="btn btn-primary" onClick={() => alert('Покупка совершена!')}>Купить</button>
        </div>
    );
}
