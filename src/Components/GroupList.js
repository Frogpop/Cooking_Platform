// GroupList.js
import React from "react";

function GroupList({ inputItems = [], header = "Список" }) {
    return (
        <>
            <h2>{header}</h2>
            {inputItems.length === 0 ? (
                <p>Извините, пока нет доступных элементов.</p>
            ) : (
                <ul className="list-group">
                    {inputItems.map((item, index) => (
                        <li key={index} className="list-group-item">
                            <a href={item.link} className="list-group-item-action">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default GroupList;
