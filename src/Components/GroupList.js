// GroupList.js
import React from "react";

function GroupList({ inputitems, iheader }) {
    return (
        <>
            <h2>{iheader}</h2>
            {inputitems.length === 0 ? (
                <p>Извините, пока нет доступных элементов.</p>
            ) : (
                <ul className="list-group">
                    {inputitems.map((item, index) => (
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
