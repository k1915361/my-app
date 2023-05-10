import { createSignal } from 'solid-js';
import FloatButton from './floatbutton';

export default function FloatButtonScroll(props: any) {
    const [isup, setIsup] = createSignal(true)
    const [count, setCount] = createSignal(0);
    const upIcon = <span>&#8593;</span>
    const downIcon = <span>&#8595;</span>
    let downUpIcon = () => isup() ? downIcon : upIcon

    const scrollToTop = () => {
        window.scrollTo(0, 0);
        setIsup(c => !c)
    }

    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
        setIsup(c => !c)
    }

    return <>
        <FloatButton
            icon={downUpIcon()}
            onClick={() => isup() ? scrollToBottom() : scrollToTop()}
        />
    </>
}