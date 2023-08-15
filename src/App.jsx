import './sass/app.scss'
import FollowCursor from "./components/FollowCursor.jsx";
import {createRef, useEffect, useCallback} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import {AnimatePresence} from "framer-motion";
import Main from "./components/main/Main.jsx";
import Technology from "./components/technology/Technology.jsx";
import TagCloud from "./components/Tag/TagCloud.jsx";
import Advantage from "./components/advantage/Advantage.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
    const followCursor = createRef();
    const location = useLocation();

    const handlerCursor = useCallback(e => {
        const target = e.target;
            if(!target) return null;

            if (target.closest('a') || target.closest('h1')) {
                followCursor.current.classList.add('follow-cursor_active');
            } else {
                followCursor.current.classList.remove('follow-cursor_active');
            }

        followCursor.current.style.left = e.pageX + 'px';
        followCursor.current.style.top = e.pageY + 'px';
    }, [followCursor])

    useEffect(() => {
        document.addEventListener('mousemove', handlerCursor);
    }, [handlerCursor])


  return (

    <div>
        <div className={'_full-screen'}>
            <Navigation/>
            <AnimatePresence>
                <Routes location={location}>
                    <Route path={'/'} exact element={<Main/>}/>
                    <Route path={'technology'} element={<Technology/>}/>
                    <Route path={'more'} element={<TagCloud/>}/>
                    <Route path={'advantage'} element={<Advantage/>}/>
                    <Route path={'contacts'} element={<Footer/>}/>
                </Routes>
            </AnimatePresence>
        </div>
        <FollowCursor ref={followCursor} />
    </div>
  )
}

export default App
