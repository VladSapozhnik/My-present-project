import {MInformationCard} from "./InformationCard.jsx";
import Cubic from "./Cubic.jsx";
import {motion} from "framer-motion";
import {MTitle} from "../Title.jsx";

const Information = () => {
    const advantagesArray = [
        {
            "id": 1,
            "src": "js",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.",
        },
        {
            "id": 2,
            "src": "react2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.",
        },
        {
            "id": 3,
            "src": "vue",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.",
        }
    ]

    const startCoordinate = [-100, 100, 100];

    const animateContent = {
        start: custom => ({
            x: custom,
            opacity: 0
        }),
        end: {
            x: 0,
            opacity: 1,
            transition: {delay: .7, duration: .5}
        }
    }

    return (
        <motion.div className={'information _pos-rel _pb-100 _f _f-column _j-center _i-center _full-screen'}
                    initial={{y: -2000, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: 0, opacity: 0}}
                    transition={{duration: .7}}
       >
            <div className={'container'}>
                <motion.div initial={'start'} whileInView={'end'}>
                    <MTitle text={'Досвід - це можливості'} custom={300} variants={animateContent}/>
                    <div className={'information__wrapper'}>
                        {advantagesArray.map((item, i) =>
                            <MInformationCard custom={startCoordinate[i]} variants={animateContent} key={item.id}
                                             title={item.title} img={`./images/${item.src}.png`}
                                             description={item.description}/>
                        )}
                    </div>
                </motion.div>
            </div>
            <Cubic/>
            {/*<Bubbles />*/}
        </motion.div>
    )
}

export default Information;
