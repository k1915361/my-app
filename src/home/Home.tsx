import Card from "../ui/Card";
import CounterButton from "../solid-tutorial/CounterButton";
import Header from "../ui/header";
import FloatButtonToTop from "../ui/FloatButtonToTop";
import CounterMemo from "../solid-tutorial/CounterMemo";
import LogInOutSwitch from "../solid-tutorial/LoginShow";
import IndexDemo from "../solid-tutorial/IndexEach";
import SwitchDemo from "../solid-tutorial/SwitchDemo";
import DynamicDemo from "../ui/DynamicDemo";
import PortalDemo from "../solid-tutorial/Portal";
import ErrorBoundaryDemo from "../solid-tutorial/ErrorBoundaryDemo";
import OnMountDemo from "../solid-tutorial/onMountDemo";

export default function Home(props: {name: string}) {
    const {name} = props
    
    return <div>
        <Header />
        <p>Hello {name}</p>
        <CounterButton />
        <Card />
        <FloatButtonToTop onClick={()=> alert('h')}/>
        <CounterMemo />
        <LogInOutSwitch />
        <IndexDemo />
        <DynamicDemo />
        <PortalDemo />
        <ErrorBoundaryDemo />
        <OnMountDemo />
    </div>
}