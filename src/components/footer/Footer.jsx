// import StickyBubble from "../StickyBubble.jsx";
import Title from "../Title.jsx";

const Footer = () => {

    return (
        <footer className={'footer'}>
            <Title />
            <div className={'container'}>
                <div className={'footer-content _f _f-column _pos-rel _j-center _bg-gray'}>
                    <div className={'footer-content__photo _pos-abs _p-30 _wid-30'}>
                    </div>
                    <h3>Game Over</h3>
                    <br />
                    <p>
                        Lorem*30
                    </p>
                </div>
            </div>
            {/*<StickyBubble />*/}
        </footer>
    )
}

export default Footer;