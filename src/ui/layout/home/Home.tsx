import OnPhotosMount from "../../photos/onMount/onPhotosMount";
import Modal from "../../modal/directivesModal";
import ChildrenCreateEffect from "../../effect/children/create/ChildrenCreateEffect";
import { TransitionsTabs } from "../../transitions/tabs/transitionTabs";
import ViewWidth from "../../viewwidth";
import './layout.css';
import GettingStartedChart from "../../chart/getting-started-chartjs";
import App_UseCloudinary from "../../../utility/App-useCloudinary";
import Home_Cloudinary from "../../cloudinary";
import DropImage from "../../dropImage";
import MultiLineChart from "../../chart/multiline-chartjs";
import Toast from "../../toast/toast";
import Footer from "../footer/footer";

export default function Home() {
    return <div>
        <Toast/>
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
        <Footer/>
    </div>
}