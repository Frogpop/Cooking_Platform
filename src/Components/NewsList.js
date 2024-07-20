function NewsList({ newsItems, header }) {
    return (
        <>
            <h1>{header}</h1>
            {newsItems.length === 0 && <p>Извините, новостей пока нет.</p>}
            <ul className="list-group">
                {newsItems.map(item => (
                    <a href={item.link} className="list-group-item list-group-item-action" key={item.title}>
                        {item.title}
                    </a>
                ))}
            </ul>
        </>
    );
}

export default NewsList;
