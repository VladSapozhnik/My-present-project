import { TypeAnimation } from 'react-type-animation';
import {createRef, useCallback, useEffect} from "react";
import {motion} from "framer-motion";

const MainContent = () => {
    const mainContent = createRef();

    const handlerPositionContent = useCallback(e => {
        const content = mainContent.current;

        if (!content) {
            return false;
        }

        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;

        content.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    }, [mainContent])

    useEffect(() => {
        window.addEventListener('mousemove', handlerPositionContent)
    }, [handlerPositionContent])

    const animateContent = {
        start: {
            x: -200,
            opacity: 0
        },
        end: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2, duration: .3}
        })
    }

    return (
        <motion.div initial={'start'} whileInView={'end'} className={'main-content'} ref={mainContent}>
            <motion.h1 custom={2} variants={animateContent} className={'main-content__title _text-l'}>Vlad Sapozhnik</motion.h1>
            <motion.div custom={4} variants={animateContent} className={'_text-l'}>
                My Technology: &#32;
                <TypeAnimation
                    sequence={['Front-End/Back-End', 1500, 'ReactJS/NextJS', 1500, 'VueJS v2/v3', 1500, 'NodeJS/ExpressJS', 1500]}
                    style={{ color: 'red' }}
                    repeat={Infinity}
                />
            </motion.div>
        </motion.div>
    )
}

export default MainContent;