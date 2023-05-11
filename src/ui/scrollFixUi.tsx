import { createEffect } from "solid-js";
import '../ui/scrollUiFix.css';

export default function ScrollFixUi(props: any) {
    const {y, setY, selector} = props
    
    const handleScroll = (e) => { 
        let rect = document.querySelector(selector)?.getBoundingClientRect();
        if (!rect) {
            console.warn(`the element selector ${selector} is not found`)
            return ''
        }
        setY( // this is not relevant but for some reason scroll listener does not work properly without this
            window.scrollY
        );
        if (rect.bottom <= 0) {
            setY(0)
        }
        if (rect.top >= 10) {
            setY(y)
        }
    };

    createEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
}