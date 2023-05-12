import Header from "../ui/layout/header/header";
import FloatButtonScroll from "../ui/floatbuttonscroll";
import OnPhotosMount from "../solid-tutorial/onPhotosMount";
import Modal from "../solid-tutorial/bindings/directives/DirectivesModal";
import ChildrenCreateEffect from "../solid-tutorial/ChildrenCreateEffect";
import { TransitionsTabs } from "../solid-tutorial/transitions/transitionTabs";
import BottomNavbar from "../ui/layout/navbar/bottomNavBar";
import ViewWidth from "../ui/viewwidth";
import './layout.css';
import Sidebar from "../ui/layout/sidebar/sidebar";

export default function Home() {
    return <div class='container'>
        <Header />
        <aside class='leftbar'>
            <Sidebar />
        </aside>
        <main class='main'>
            <ViewWidth />
            <OnPhotosMount />
            <br />
            <TransitionsTabs />
            <Modal />
            <FloatButtonScroll />
            <ChildrenCreateEffect />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <p>end of main</p>
        </main>
        <aside class='rightbar'>
            <h2>right panel</h2>
        </aside>
        <footer class='footer'>footer</footer>
        <BottomNavbar />
    </div>
}