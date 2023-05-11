// import Header from "../ui/header";
import Header from "../ui/header/header";
import FloatButtonScroll from "../ui/floatbuttonscroll";
import OnMountDemo from "../solid-tutorial/onPhotosMount";
import Modal from "../solid-tutorial/bindings/directives/DirectivesModal";
import ChildrenCreateEffect from "../solid-tutorial/ChildrenCreateEffect";
import { TransitionsTabs } from "../solid-tutorial/transitions/transitionTabs";
import BottomNavbar from "../ui/navbar/bottomNavBar";

export default function Home(props: {name: string}) {
    const {name} = props
    
    return <div>
        <Header />
        <main>
            <BottomNavbar />
            <OnMountDemo />
            <br/>
            <TransitionsTabs />
            <Modal />
            <FloatButtonScroll />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ChildrenCreateEffect />
        </main>
    </div>
}