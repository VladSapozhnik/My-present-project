const Bubbles = () => {
    const cubicCount = [...Array(50)];
    return (
        <ul className="bubbles _list-none">
            {cubicCount.map((cubic, i) => <li key={i} className={'bubbles__bubble'}></li>)}
        </ul>
    )
}

export default Bubbles;