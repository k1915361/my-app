import { createSignal } from "solid-js";

export default function ViewWidth(props: any) {
    const [w, setW] = createSignal(viewport().width)
    
    function viewport() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    }

    window.addEventListener('resize', () => {
        setW(viewport().width)
    });

    return <div>
        window width:{w()+''}
    </div>
}