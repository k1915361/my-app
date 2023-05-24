import OnPhotosMount from "../../photos/onMount/onPhotosMount";
import Modal from "../../modal/directivesModal";
import ChildrenCreateEffect from "../../effect/create/children/ChildrenCreateEffect";
import { TransitionsTabs } from "../../transitions/tabs/transitionTabs";
import ViewWidth from "../../viewwidth";
import GettingStartedChart from "../../chart/getting-started-chartjs";
import App_UseCloudinary from "../../../utility/App-useCloudinary";
import Home_Cloudinary from "../../image/cloudinary";
import DropImage from "../../dropimage/dropImage";
import MultiLineChart from "../../chart/multiline-chartjs";
import Footer from "../footer/footer";
import './layout.css';
import ScrollButton from "../../scroll/button/scroll";
import SettingsButton from "../../input/settingsbutton";
import ImageCompress from "../../image/image-compress";
import Main from "../main/main";

export default function Home({app}) {
    let main;
    return <Main ref={main}>
        <SettingsButton app={app}/>  
        <ImageCompress/>
        <GettingStartedChart/><br/>
        <MultiLineChart/><br/>
        <App_UseCloudinary/>
        <Home_Cloudinary/>
        <DropImage/>
        <ViewWidth/>
        <OnPhotosMount/><br/>
        <Modal/><br/><br/>
        <ChildrenCreateEffect/><br/>
        <TransitionsTabs/>
        <ScrollButton text='Scroll to' ref={()=>main}/>
        <Footer/>
    </Main>
}