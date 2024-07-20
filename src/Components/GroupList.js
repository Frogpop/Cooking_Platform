

function GroupList(inputitems, iheader){
    let items=inputitems;
    let header=iheader;

    return (
        <>
            <h1>{header}</h1>
            {items.length===0 && <p>Sorry braza, we got notting</p>
            }
        <ul className="list-group">
        {items.map(item=> <a href = {item} className={"list-group-item list-group-item-action"} key={item}>{item}</a>)}
        </ul>
        </>
    );
}

export default GroupList;