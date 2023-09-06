import {useCallback, useEffect, useRef, useState, forwardRef} from "react";
import {motion} from "framer-motion";

const Clock = forwardRef((_, ref) => {
    const [size, setSize] = useState({});

    const mmRef = useRef();
    const hhRef = useRef();
    const ssRef = useRef();

    const clockRef = useRef();


    const handlerSetTimes = useCallback(() => {
        const date = new Date();

        const s = date.getSeconds() * 6;
        const m = date.getMinutes() * 6;
        const h = date.getHours() * 30;

        ssRef.current.style.transform = `rotateZ(${s}deg)`;
        mmRef.current.style.transform = `rotateZ(${m}deg)`;
        hhRef.current.style.transform = `rotateZ(${h}deg)`;
    }, [])

    const resizeHandler = () => {
        const {clientHeight, clientWidth} = clockRef.current || {};
        setSize({clientHeight, clientWidth});
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [])

    useEffect(() => {
        const intervalTime = setInterval(handlerSetTimes, 1000);

        return () => {
            clearInterval(intervalTime);
        }
    }, [handlerSetTimes])

    return (
        <div ref={ref}>
            <div className={'clock'} ref={clockRef}
                 style={{height: size.clientWidth > 550 ? 550 : size.clientWidth + 'px'}}>
                {[...Array(12)].map((item, i) => <span key={i}><b>{i + 1}</b></span>)}
                <div className={'whirlpool whirlpool--1'}></div>
                <div className={'whirlpool whirlpool--2'}></div>
                <div className={'whirlpool whirlpool--3'}></div>
                <div ref={ssRef} className={'circle circle--1'}><i></i></div>
                <div ref={mmRef} className={'circle circle--2'}><i></i></div>
                <div ref={hhRef} className={'circle circle--3'}><i></i></div>
            </div>
        </div>
    )
})

export const MClock = motion(Clock);
export default Clock;