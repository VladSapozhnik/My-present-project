import {TypeAnimation} from "react-type-animation";
import {forwardRef} from "react";
import {motion} from "framer-motion";

// eslint-disable-next-line react/display-name
const Logo = forwardRef((_, ref) => {
    return (
        <pre className={'logo _f _i-center'} ref={ref}>
            &lt;img src=&#34;<img className={'logo__pic'} src={'./images/NoBorderVS.png'} alt={'logo'}/>&#34;
            alt=&#34;
                <TypeAnimation
                    sequence={['logo', 1500, 'VS', 1500]}
                    style={{ color: 'red' }}
                    repeat={Infinity}
                />&#34;
            /&gt;
        </pre>
    )
})

export const MLogo = motion(Logo);
// export default Logo;