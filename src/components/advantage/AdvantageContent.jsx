import {motion} from "framer-motion";

const AdvantageContent = () => {
    const animatedContent = {
        start: {
            x: 300,
            opacity: 0,
        },
        end: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }


    return (
        <motion.div className={'advantage-content _f _f-column'} initial={'start'} whileInView={'end'}>
            <motion.h2 variants={animatedContent} custom={3} className={'advantage-content__title'}>Час є найдорожчим ресурсом.</motion.h2>
            <motion.p variants={animatedContent} custom={4} className={'advantage-content__description'}>Дотримання дедлайну, як одне з  правил роботи та запорука успіху.</motion.p>
        </motion.div>
    )
}
export default AdvantageContent;