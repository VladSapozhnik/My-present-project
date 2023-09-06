import {useEffect, useRef} from "react";

const TextMorph = () => {
    const textRef = useRef();

    useEffect(() => {
        const text1 = textRef.current.childNodes[0];
        const text2 = textRef.current.childNodes[1];

        const texts = [
            "My",
            "By"
        ];

// Controls the speed of morphing.
        const morphTime = 1;
        const cooldownTime = 0.25;

        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;

        text1.textContent = texts[textIndex % texts.length];
        text2.textContent = texts[(textIndex + 1) % texts.length];

        function doMorph() {
            morph -= cooldown;
            cooldown = 0;

            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        }

// A lot of the magic happens here, this is what applies the blur filter to the text.
        function setMorph(fraction) {
            // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

            text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            fraction = 1 - fraction;
            text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            text1.textContent = texts[textIndex % texts.length];
            text2.textContent = texts[(textIndex + 1) % texts.length];
        }

        function doCooldown() {
            morph = 0;

            text2.style.filter = "";
            text2.style.opacity = "100%";

            text1.style.filter = "";
            text1.style.opacity = "0%";
        }

// Animation loop, which is called every frame.
        function animate() {
            requestAnimationFrame(animate);

            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;

            cooldown -= dt;

            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }

                doMorph();
            } else {
                doCooldown();
            }
        }

        // setInterval(() => {
        //
        // }, 1000);

        animate();
        return () => {
            return false;
        }
    }, [])

    return (
        <div className={'morph'} ref={textRef}>
            <span className={'morph__text'}></span>
            <span className={'morph__text'}></span>
            <svg id="filters">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix in="SourceGraphic"
                                       type="matrix"
                                       values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default TextMorph;