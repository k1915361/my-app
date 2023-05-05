import { createSignal } from 'solid-js';
import FloatButton from './FloatButton';

export default function FloatButtonToTop (props: any){
    const [isup, setIsup]= createSignal(true)
    const {icon, name, style, children} = props 
    const [count, setCount] = createSignal(0);

    const increment = () => setCount(c => c + 1)

    

    const scrollToTop = () => {
        window.scrollTo(0,0);
        setIsup(c => !c)
    }

    const scrollToBottom = () => {
        window.scrollTo(0,document.body.scrollHeight);
        setIsup(c => !c)
    }

    const upIcon = <span>&#8593;</span>
    const downIcon = <span>&#8595;</span>

    return <><FloatButton 
        icon={isup() ? downIcon : upIcon} 
        onClick={() => setIsup(!isup())}>
            {isup() ? downIcon : upIcon} 
        </FloatButton>
    </>
}