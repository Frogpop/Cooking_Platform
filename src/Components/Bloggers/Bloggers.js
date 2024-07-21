import React from 'react';
import { Link } from 'react-router-dom';
import './Bloggers.css';

const bloggers = [
    {
        name: "Анна Петрова",
        profileLink: "/bloggers/anna-petrova",
        profileImage: "https://avatars.mds.yandex.net/i?id=8daa6ba6443f60fbc24606bdff248fd469382266-10096959-images-thumbs&n=13"
    },
    {
        name: "Иван Иванов",
        profileLink: "/bloggers/ivan-ivanov",
        profileImage: "https://avatars.mds.yandex.net/i?id=4b2501c7739ff9225ceeb08e78de0966-4451358-images-thumbs&n=13"
    },
    {
        name: "Мария Смирнова",
        profileLink: "/bloggers/maria-smirnova",
        profileImage: "https://avatars.mds.yandex.net/i?id=eeaeb5c86629cbc7b44ea367cbc8e045-4590565-images-thumbs&n=13  "
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
