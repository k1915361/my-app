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
        let comment = 'below line is not relevant but scroll listener does not work properly without this'
        setY( window.scrollY ); 
        if (rect.bottom <= 100) {
            setY(0)
        }
        if (rect.top >= 100) {
            setY(y)
        }
    };

    createEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
}