import { createSignal, For, createEffect } from "solid-js";
import '../ui/scrollUiFix.css';

export default function ScrollFixUi(props: any) {
    const [pos, setPos] = createSignal({x: 0, y: 0});
    const c = children(() => props.children);
    createEffect(() => c().forEach(item => item.style = props.style));
    
    const handleScroll = (e) => {
        let rect = document.querySelector('.photos')?.getBoundingClientRect();
        if (rect.bottom <= 0) {
            setPos({...pos(), y: 0})
        }
        if (rect.top >= 10) {
            setPos({...pos(), y: 0})
        }
    };

    createEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    const isFixed = () =>
        pos().y > 0 ? 'fixed' : ''

    return <div >
        {c()}
        {props.children.style = { position:isFixed(),top: 0, left: '36%' }}
    </div>;

}