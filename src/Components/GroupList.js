function GroupList({ inputitems, iheader }) {
    let items = inputitems;
    let header = iheader;

    return (
        <>
            <h1>{header}</h1>
            {items.length === 0 && <p>Sorry, we have nothing at the moment.</p>}
            <ul className="list-group">
                {items.map(item => (
                    <a href={item.link} className="list-group-item list-group-item-action" key={item.name}>
                        {item.name}
                    </a>
                ))}
            </ul>
        </>
    );
}

export default GroupList;
