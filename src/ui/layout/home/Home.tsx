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
import SettingsButton from "../../input/settingsbutton";
import { toggle } from "../../../utility/helper";

export default function Home({app}) {
    let main;
    return <div class="main" ref={main}>
        <SettingsButton app={app} func={(e)=>{
            let button = e.target;
            let vis = button.style.visibility;
            button.style.setProperty('visibility', toggle(vis, 'hidden | visible'));
        }}/>
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