const SquareAnimation = () => {
    const square = [...Array(20)];
    return (
        <ul className={'square _list-none'}>
            {square.map((square,i) => <li key={i}></li>)}
        </ul>
    )
}

export default SquareAnimation;