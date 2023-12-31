const Cubic = () => {
    const cubicCount = [...Array(30)];
    return (
        <ul className="cubicle _list-none">
            {cubicCount.map((cubic, i) => <li key={i} className={'cubicle__cubic'}></li>)}
        </ul>
    )
}

export default Cubic;