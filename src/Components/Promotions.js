import React from 'react';
import './Promotions.css';

const promotions = [
    { title: "Скидка 20% на кухонные ножи", description: "Получите 20% скидку на все кухонные ножи до конца месяца!", image: "/images/knife-promo.jpg" },
    { title: "Бесплатная доставка при заказе от 3000 руб.", description: "Закажите на сумму от 3000 руб. и получите бесплатную доставку.", image: "/images/free-delivery.jpg" },
    { title: "Подарок при покупке блендера", description: "При покупке любого блендера получите подарок - набор мерных стаканчиков.", image: "/images/blender-promo.jpg" }
];

export default function Promotions() {
    return (
        <div className="promotions-container">
            <h2>Текущие акции</h2>
            <div className="row">
                {promotions.map((promo, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src={promo.image} className="card-img-top" alt={promo.title} />
                            <div className="card-body">
                                <h5 className="card-title">{promo.title}</h5>
                                <p className="card-text">{promo.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
