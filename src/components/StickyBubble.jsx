const StickyBubble = () => {

    return (
        <div className={'g-container'}>
            <div className="g-wrap">
                <div className="g-footer">
                    {[...Array(200)].map((item, i) => <div className="g-bubble" key={i}></div>)}
                </div>
            </div>
        </div>

    )
}

export default StickyBubble;