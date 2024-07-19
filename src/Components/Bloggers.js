import React from 'react';
import { Link } from 'react-router-dom';
import './Bloggers.css';

const bloggers = [
    {
        name: "Анна Петрова",
        profileLink: "/bloggers/anna-petrova",
        profileImage: "/images/anna-petrova.jpg"
    },
    {
        name: "Иван Иванов",
        profileLink: "/bloggers/ivan-ivanov",
        profileImage: "/images/ivan-ivanov.jpg"
    },
    {
        name: "Мария Смирнова",
        profileLink: "/bloggers/maria-smirnova",
        profileImage: "/images/maria-smirnova.jpg"
    }
];

export default function Bloggers() {
    return (
        <div className="bloggers-container">
            <h2>Наши блогеры</h2>
            <ul className="list-group">
                {bloggers.map((blogger, index) => (
                    <li key={index} className="list-group-item">
                        <Link to={blogger.profileLink} className="list-group-item-action">
                            <img src={blogger.profileImage} alt={blogger.name} className="blogger-profile-img" />
                            {blogger.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
