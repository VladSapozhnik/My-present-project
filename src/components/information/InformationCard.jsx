import PropTypes from "prop-types";
import {forwardRef} from "react";
import {motion} from "framer-motion";

const InformationCard = forwardRef(({title, img, description}, ref) => {
    return (
        <div className="card" ref={ref}>
            <div className="face face--front">
                <div className="content object-fit">
                    <img className={'face__pic'} src={img} alt={'img'} />
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="face face--back">
                <div className="content">
                    <p>{description}</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    )
})

InformationCard.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string
}

export const MInformationCard = motion(InformationCard);
export default InformationCard;