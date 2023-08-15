import Media from "./Media.jsx";
import MainContent from "./MainContent.jsx";

const Main = () => {
    return (
        <main className={'main _full-screen _pos-rel _f _i-center'}>
            <Media />
            <div className={'container'}>
                <MainContent />
            </div>
        </main>
    )
}

export default Main