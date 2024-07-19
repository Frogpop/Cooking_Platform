import React from "react";

const bloggers = [
    { name: "Анна Петрова", description: "Эксперт по выпечке и десертам", link: "/bloggers/anna-petrova" },
    { name: "Иван Иванов", description: "Мастер гриля и барбекю", link: "/bloggers/ivan-ivanov" },
    { name: "Мария Смирнова", description: "Специалист по вегетарианским рецептам", link: "/bloggers/maria-smirnova" },
    { name: "Алексей Сидоров", description: "Шеф-повар итальянской кухни", link: "/bloggers/alexey-sidorov" },
    { name: "Екатерина Кузнецова", description: "Гуру здорового питания", link: "/bloggers/ekaterina-kuznetsova" }
];

export default function Bloggers() {
    return (
        <div>
            <h1>Наши блогеры</h1>
            <ul className="list-group">
                {bloggers.map(blogger => (
                    <a href={blogger.link} className="list-group-item list-group-item-action" key={blogger.name}>
                        <h3>{blogger.name}</h3>
                        <p>{blogger.description}</p>
                    </a>
                ))}
            </ul>
        </div>
    );
}
