import Header from "../ui/layout/header/header";
import FloatButtonScroll from "../ui/floatbuttonscroll";
import OnPhotosMount from "../solid-tutorial/onPhotosMount";
import Modal from "../solid-tutorial/bindings/directives/DirectivesModal";
import ChildrenCreateEffect from "../solid-tutorial/ChildrenCreateEffect";
import { TransitionsTabs } from "../solid-tutorial/transitions/transitionTabs";
import BottomNavbar from "../ui/layout/navbar/bottomNavBar";
import ViewWidth from "../ui/viewwidth";
import './layout.css';
import Sidebar from "../ui/layout/sidebar/sidebar-flat/sidebar";
import SideBarLeft from "../ui/layout/sidebar/left/left";
import { numbersfrom } from "../utility/helper";

export default function Home() {
    return <div class=''>
        {/* <Header /> */}
        {/* <aside class='leftbar'>
            <Sidebar />
        </aside> */}
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
        <p>end</p>
        {/* <BottomNavbar />  */}
    </div>
}