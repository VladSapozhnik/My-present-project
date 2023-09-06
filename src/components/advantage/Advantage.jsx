import SquareAnimation from "../SquareAnimation.jsx";
import {motion} from "framer-motion";
import {MClock} from "./Clock.jsx";
import AdvantageContent from "./AdvantageContent.jsx";
import Navigation from "../navigation/Navigation.jsx";


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
        <motion.section className={'advantage _pos-rel _pb-100 _f _f-column _j-center _i-center _full-screen'}
                        initial={{y: 2000, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: 0, opacity: 0}}
                        transition={{duration: .7}}
        >
            <div className={'container'}>
                <motion.div initial={'start'} whileInView={'end'} className={'_f _i-center _j-between _wid-100'}>
                    <MClock variants={animatedClock} custom={2}/>
                    <AdvantageContent/>
                </motion.div>
            </div>
            <SquareAnimation/>
        </motion.section>
    )
}

export default Advantage;