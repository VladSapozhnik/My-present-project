import {motion} from "framer-motion";
import TextMorph from "./TextMorph.jsx";

const TagClouds = () => {
    const tagCloudArray = [
        {
            value: 'html', pos: {
                x: 72,
                y: 10,
            }
        },
        {
            value: 'figma', pos: {
                x: 74,
                y: 73,
            }
        },
        {
            value: 'js', pos: {
                x: 17,
                y: 31
            }
        },
        {
            value: 'vue', pos: {
                x: 15,
                y: 13,
            }
        },
        {
            value: 'react', pos: {
                x: 6,
                y: 58,
            }
        },
        {
            value: 'ts', pos: {
                x: 93,
                y: 65,
            }
        },
        {
            value: 'yarn', pos: {
                x: 73,
                y: 25
            }
        },
        {
            value: 'react-toolkit', pos: {
                x: 17,
                y: 52,
            }
        },
        {
            value: 'react-router', pos: {
                x: 78,
                y: 90,
            }
        },
        {
            value: 'vuex', pos: {
                x: 47,
                y: 91,
            }
        },
        {
            value: 'jquery', pos: {
                x: 67,
                y: 90,
            }
        },
        {
            value: 'git', pos: {
                x: 37,
                y: 91,
            }
        },
        {
            value: 'php', pos: {
                x: 30,
                y: 82,
            }
        },
        {
            value: 'nodejs', pos: {
                x: 55,
                y: 9,
            }
        },
        {
            value: 'mysql', pos: {
                x: 82,
                y: 34,
            }
        },
        {
            value: 'css', pos: {
                x: 95,
                y: 90,
            }
        },
        {
            value: 'sass', pos: {
                x: 64,
                y: 9,
            }
        },
        {
            value: 'less', pos: {
                x: 57,
                y: 91,
            }
        },
        {
            value: 'gulp', pos: {
                x: 26,
                y: 36,

            }
        },
        {
            value: 'photoshop', pos: {
                x: 5,
                y: 36,
            }
        },
        {
            value: 'vite', pos: {
                x: 5,
                y: 13
            }
        },
        {
            value: 'webpack', pos: {
                x: 26,
                y: 59,
            }
        },
        {
            value: 'nextjs', pos: {
                x: 93,
                y: 46,
            }
        },
        {
            value: 'i18', pos: {
                x: 86,
                y: 83,
            }
        },
        {
            value: 'es6', pos: {
                x: 22,
                y: 77,
            }
        },
        {
            value: 'docker', pos: {
                x: 91,
                y: 27,
            }
        },
        {
            value: 'vscode', pos: {
                x: 74,
                y: 38,
            }
        },
        {
            value: 'phpstorm', pos: {
                x: 91,
                y: 9,
            }
        },
        {
            value: 'material-ui', pos: {
                x: 74,
                y: 56,

            }
        },
        {
            value: 'bootstrap', pos: {
                x: 82,
                y: 14,
            }
        },
        {
            value: 'linux', pos: {
                x: 46,
                y: 8,
            }
        },
        {
            value: 'rest-api', pos: {
                x: 84,
                y: 50,
            }
        },
        {
            value: 'json', pos: {
                x: 14,
                y: 92,
            }
        },
        {
            value: 'express', pos: {
                x: 13,
                y: 72,
            }
        },
        {
            value: 'npm', pos: {
                x: 84,
                y: 65,
            }
        },
        {
            value: 'swiper', pos: {
                x: 27,
                y: 15,
            }
        },
        {
            value: 'framer-motion', pos: {
                x: 5,
                y: 87,
            }
        },
        {
            value: 'vuelidate', pos: {
                x: 37,
                y: 9,
            }
        },
        {
            value: 'axios', pos: {
                x: 23,
                y: 92,
            }
        },
    ]

    const animateContent = {
        start: {
            top: 50 + '%',
            left: 50 + '%',
            opacity: 0,
            translateX: -50 + '%',
            translateY: -50 + '%'
        },
        end: custom => ({
            top: custom.y + '%',
            left: custom.x + '%',
            translateX: -50 + '%',
            translateY: -50 + '%',
            opacity: 1,
            transition: {delay: .7, duration: .5}
        })
    }

    return (
        <motion.section className={'technology _full-screen _f _pt-100 _j-center _f-column _i-center'}
                        initial={{x: 2000, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: -2000, opacity: 0}}
                        transition={{duration: .6}}
                        style={{
                            background: '#FCA17D'
                        }}
        >
            <div className={'container-full _h-100 _pos-rel'}>

                <motion.div initial={'start'} whileInView={'end'} className={'technology-cloud _h-100 _f _j-center _i-center _pos-rel'}>
                    <TextMorph />
                    {tagCloudArray.map((item, i) =>
                        <motion.img src={`./icon/tag/${item.value}.svg`}
                                    alt={item.value}
                                    custom={{x: item.pos.x, y: item.pos.y}}
                                    variants={animateContent} key={i}
                                    whileHover={{scale: 1.15}}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10
                                    }}
                                    className={'technology-cloud__tag'}/>)}
                </motion.div>
            </div>

        </motion.section>
    )
}

export default TagClouds;