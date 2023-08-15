import {useCallback, useEffect, useRef, useState} from "react";

const Clock = () => {
    const [size, setSize] = useState({});


    const handsRef = useRef();
    const clockRef = useRef();


    const handlerSetTimes = useCallback(() => {
        const date = new Date();
        const hands = handsRef.current.childNodes;
        const s = date.getSeconds();
        const m = date.getMinutes();
        const h = date.getHours();

        const sDeg = ((s / 60) * 360);
        const mDeg = ((m / 60) * 360);
        const hDeg = ((h / 12) * 360);

        hands[2].style.transform = `rotate(${sDeg}deg)`;
        hands[0].style.transform = `rotate(${mDeg}deg)`;
        hands[1].style.transform = `rotate(${hDeg}deg)`;

    }, [handsRef])

    const resizeHandler = () => {
        const { clientHeight, clientWidth } = clockRef.current || {};
        setSize({ clientHeight, clientWidth });
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [])

    useEffect(() => {
        setInterval(handlerSetTimes, 1000);
    }, [handlerSetTimes])

    return (
        <div className={'clock'} ref={clockRef} style={{height: size.clientWidth + 'px'}}>
            <div className={'clock__seeds'}>
                {[...Array(15)].map((seed, i) => <div key={i}></div>)}
            </div>
            <div className={'clock-quarter'}>
                <div className={'clock-quarter__top'}></div>
                <div className={'clock-quarter__right'}></div>
                <div className={'clock-quarter__bottom'}></div>
                <div className={'clock-quarter__left'}></div>
            </div>
            <div className={'clock-hands'} ref={handsRef}>
                <div className={'clock-hands__m'}></div>
                <div className={'clock-hands__h'}></div>
                <div className={'clock-hands__s'}></div>
            </div>
        </div>
    )
}

export default Clock;