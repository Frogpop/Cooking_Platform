

function GroupList(){
    let items=["1","2"];
    let header="amma header";


    return (
        <>
            <h1>{header}</h1>
            {items.length===0 && <p>Sorry braza, we got notting</p>
            }
        <ul className="list-group">
        {items.map(item=> <a href={"alchemybook"} className={"list-group-item list-group-item-action"} key={item}>{item}</a>)}
        </ul>
        </>
    );
}

export default GroupList;