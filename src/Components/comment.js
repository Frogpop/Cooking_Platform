function Comment (author, text)
{
    return (
        <div className={"list-group-item list-group-item-dark"}>
            <>{author}</>
            <div>

                {text}
            </div>
        </div>
    )
}
export default Comment