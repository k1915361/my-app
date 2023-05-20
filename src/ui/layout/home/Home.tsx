import FloatButtonScroll from "../../floatbuttonscroll";
import OnPhotosMount from "../../../solid-tutorial/onPhotosMount";
import Modal from "../../../solid-tutorial/bindings/directives/DirectivesModal";
import ChildrenCreateEffect from "../../../solid-tutorial/ChildrenCreateEffect";
import { TransitionsTabs } from "../../../solid-tutorial/transitions/transitionTabs";
import ViewWidth from "../../viewwidth";
import './layout.css';
import GettingStartedChart from "../../chart/getting-started-chartjs";
import App_UseCloudinary from "../../../utility/App-useCloudinary";
import Home_Cloudinary from "../../cloudinary";
import DropImage from "../../dropImage";

export default function Home() {
    return <div class=''>
        <GettingStartedChart />
        <App_UseCloudinary />
        <Home_Cloudinary />
        <DropImage />
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
        <div class="footer"><h3>Footer</h3></div>
    </div>
}