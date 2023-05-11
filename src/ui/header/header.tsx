import { createEffect, createSignal } from 'solid-js';
import './style.css';

export default function Header() {
    const [y, setY] = createSignal(0);
    
    const handleScroll = (e) => { 
        setY( window.scrollY ); 
    };

    createEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return <header classList={{fixed: y() !== 0}}>header...</header>
}