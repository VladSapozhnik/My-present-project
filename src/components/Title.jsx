import {motion} from "framer-motion";
import {forwardRef} from "react";

const Title = forwardRef(({text = 'Not title'}, ref) => {
    return <h2 className={'title'} ref={ref}>{text}</h2>
})


export const MTitle = motion(Title);

export default Title;