// import { AiOutlineHome, BsTelephone, IoBulbOutline, BsClock, BsPersonAdd } from 'react-icons/all';
import {motion} from "framer-motion";
import {MLogo} from "./Logo.jsx";
import {Link} from "react-router-dom";

const Navigation = () => {
    const paginationArray = [
        {
            id: 1,
            text: "Головна",
            to: "/"
        },
        {
            id: 2,
            text: "Технології",
            to: "technology"
        },
        {
            id: 3,
            text: "More",
            to: "more"
        },
        {
            id: 4,
            text: "Перевага",
            to: "advantage"
        },
        {
            id: 5,
            text: "Контакти",
            to: "contacts"
        }
    ]


    const animateNav = {
        start: {
            y: -100,
            opacity: 0
        },
        end: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }


    return (
        <motion.nav initial={'start'} whileInView={'end'} className={'navigation _pos-fix _pos-left _pos-top'}>
            <div className={'container _f _j-between _i-center'}>
                <MLogo custom={1.5} variants={animateNav} />
                <ul className={'navigation-list _list-none _f'}>
                    {paginationArray.map((item, i) => <li key={item.id} className={'navigation-item _c-pointer'}>
                        <Link to={item.to}>
                            {item.text}
                        </Link>
                    </li>)}
                    <li className={'navigation-item navigation-item--download _c-pointer'} >
                        <motion.pre custom={paginationArray.length + 1} variants={animateNav}>
                            <a href={'./resume.pdf'} download>Resume</a>
                        </motion.pre>
                    </li>
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navigation;