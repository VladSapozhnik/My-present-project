import SquareAnimation from "../SquareAnimation.jsx";
import {motion} from "framer-motion";
import {MClock} from "./Clock.jsx";
import AdvantageContent from "./AdvantageContent.jsx";


const Advantage = () => {
    const animatedClock = {
        start: {
            x: -300,
            opacity: 0,
        },
        end: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2, duration: .3}
        })
    }


    return (
        <section className={'advantage _pos-rel'}>
            <div className={'container'}>
                <motion.div initial={'start'} whileInView={'end'} className={'_f _i-center _j-between _wid-100'}>
                    <MClock variants={animatedClock} custom={2}/>
                    <AdvantageContent/>
                </motion.div>
                <SquareAnimation/>
            </div>
        </section>
    )
}

export default Advantage;