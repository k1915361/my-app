import OnPhotosMount from "../../photos/onMount/onPhotosMount";
import Modal from "../../modal/directivesModal";
import ChildrenCreateEffect from "../../effect/children/create/ChildrenCreateEffect";
import { TransitionsTabs } from "../../transitions/tabs/transitionTabs";
import ViewWidth from "../../viewwidth";
import GettingStartedChart from "../../chart/getting-started-chartjs";
import App_UseCloudinary from "../../../utility/App-useCloudinary";
import Home_Cloudinary from "../../cloudinary";
import DropImage from "../../dropImage";
import MultiLineChart from "../../chart/multiline-chartjs";
import Footer from "../footer/footer";
import './layout.css';
import ScrollButton from "../../scroll/button/scroll";

export default function Home() {
    let main;
    return <div class="main" ref={main}>
        <GettingStartedChart />
        <br/>
        <MultiLineChart/>
        <br/>
        <App_UseCloudinary/>
        <Home_Cloudinary/>
        <DropImage/>
        <ViewWidth/>
        <OnPhotosMount/>
        <br/>
        <Modal/>
        <ChildrenCreateEffect/>
        <TransitionsTabs/>
        <ScrollButton text='Scroll to' ref={()=>main}/>
        <Footer/>
    </div>
}