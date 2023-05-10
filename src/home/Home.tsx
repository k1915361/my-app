import Card from "../ui/card";
import CounterButton from "../solid-tutorial/CounterButton";
import Header from "../ui/header";
import FloatButtonScroll from "../ui/floatbuttonscroll";
import OnMountDemo from "../solid-tutorial/onMountDemo";
import { Link } from "../ui/textlink";
import Modal from "../solid-tutorial/bindings/directives/DirectivesModal";
import ChildrenCreateEffect from "../solid-tutorial/ChildrenCreateEffect";
import { TransitionsTabs } from "../solid-tutorial/transitions/main";

export default function Home(props: {name: string}) {
    const {name} = props
    
    return <div>
        <Header />
        <OnMountDemo />
        <br/><br/>
        <br/><br/>
        <br/>
        <br />
        <TransitionsTabs />
        <Modal />
        <Card />
        <CounterButton />
        <Link text='button'/>
        <p>Welcome {name}</p>
        <FloatButtonScroll />
        <ChildrenCreateEffect />
    </div>
}