import {motion} from "framer-motion";
import Title from "../Title.jsx";

const TagClouds = () => {
    const tagCloudArray = [
        {
            value: 'html', pos: {
                x: 68,
                y: 5,
            }
        },
        {
            value: 'css', pos: {
                x: 72,
                y: 36,
            }
        },
        {
            value: 'js', pos: {
                x: 15,
                y: 15
            }
        },
        {
            value: 'vue', pos: {
                x: 26,
                y: 7,
            }
        },
        {
            value: 'react', pos: {
                x: 4,
                y: 64,
            }
        },
        {
            value: 'ts', pos: {
                x: 20,
                y: 34,
            }
        },
        {
            value: 'yarn', pos: {
                x: 11,
                y: 27
            }
        },
        {
            value: 'react-toolkit', pos: {
                x: 6,
                y: 43,
            }
        },
        {
            value: 'react-router', pos: {
                x: 82,
                y: 90,
            }
        },
        {
            value: 'vuex', pos: {
                x: 43,
                y: 90,
            }
        },
        {
            value: 'npm', pos: {
                x: 61,
                y: 86,
            }
        },
        {
            value: 'git', pos: {
                x: 37,
                y: 83,
            }
        },
        {
            value: 'php', pos: {
                x: 28,
                y: 85,
            }
        },
        {
            value: 'phpmyadmin', pos: {
                x: 50,
                y: 0,
            }
        },
        {
            value: 'mysql', pos: {
                x: 70,
                y: 72,
            }
        },
        {
            value: 'nodejs', pos: {
                x: 20,
                y: 20,
            }
        },
        {
            value: 'sass', pos: {
                x: 42,
                y: 6,
            }
        },
        {
            value: 'less', pos: {
                x: 6,
                y: 11,
            }
        },
        {
            value: 'gulp', pos: {
                x: 18,
                y: 2,
            }
        },
        {
            value: 'es6', pos: {
                x: 2,
                y: 31,
            }
        },
        {
            value: 'vite', pos: {
                x: 1,
                y: 0
            }
        },
        {
            value: 'webpack', pos: {
                x: 16,
                y: 87,
            }
        },
        {
            value: 'nextjs', pos: {
                x: 88,
                y: 44,
            }
        },
        {
            value: 'figma', pos: {
                x: 88,
                y: 77,
            }
        },
        {
            value: 'photoshop', pos: {
                x: 18,
                y: 72,
            }
        },
        {
            value: 'docker', pos: {
                x: 94,
                y: 22,
            }
        },
        {
            value: 'jquery', pos: {
                x: 69,
                y: 20,
            }
        },
        {
            value: 'vscode', pos: {
                x: 80,
                y: 31,
            }
        },
        {
            value: 'phpstorm', pos: {
                x: 87,
                y: 3,
            }
        },
        {
            value: 'material-ui', pos: {
                x: 85,
                y: 64,
            }
        },
        {
            value: 'bootstrap', pos: {
                x: 78,
                y: 12,
            }
        },
        {
            value: 'linux', pos: {
                x: 60,
                y: 8,
            }
        },
        {
            value: 'rest-api', pos: {
                x: 73,
                y: 56,
            }
        },
        {
            value: 'json', pos: {
                x: 33,
                y: 0,
            }
        },
        {
            value: 'express', pos: {
                x: 14,
                y: 55,
            }
        },
        {
            value: 'i18', pos: {
                x: 80,
                y: 45,
            }
        },
        {
            value: 'swiper', pos: {
                x: 51,
                y: 86,
            }
        },
        {
            value: 'framer-motion', pos: {
                x: 3,
                y: 80,
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
        <motion.section className={''}
                        initial={{x: 2000, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: -2000, opacity: 0}}
                        transition={{duration: .6}}
                        style={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#ffcc99'
                        }}
        >
            <div className={'container-full _pos-rel'}>

                <motion.div initial={'start'} whileInView={'end'}
                            className={'cloud _f _f-wrap _i-center _j-center'}>
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
                                    className={'cloud__tag'}/>)}
                </motion.div>
            </div>

        </motion.section>
    )
}

export default TagClouds;