import React from 'react';
import './Promotions.css';

const promotions = [
    { title: "Скидка 20% на кухонные ножи", description: "Получите 20% скидку на все кухонные ножи до конца месяца!", image: "https://avatars.mds.yandex.net/i?id=e0bb398ae789c67530cdf3edba38b08ab551a9a1-8209530-images-thumbs&n=13" },
    { title: "Бесплатная доставка при заказе от 3000 руб.", description: "Закажите на сумму от 3000 руб. и получите бесплатную доставку.", image: "https://avatars.mds.yandex.net/i?id=085a904e37b8565bd3e0673cab1dd3bc5e11697d-5338246-images-thumbs&n=13" },
    { title: "Подарок при покупке блендера", description: "При покупке любого блендера получите подарок - набор мерных стаканчиков.", image: "https://avatars.mds.yandex.net/i?id=c945c0f369ecc4d955aa371a0e868d9bcaea1a50-5581167-images-thumbs&n=13" }
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
