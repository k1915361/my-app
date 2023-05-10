import { createSignal, onMount, For, createEffect } from "solid-js";
import "./onMountDemo.css";
import '../ui/scrollUiFix.css';

export default function OnMountDemo() {
    const [photos, setPhotos] = createSignal([]);
    const [selected, setSelected] = createSignal(4);
    const [pos, setPos] = createSignal({x: 0, y: 0});

    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        setPhotos(await res.json());
    });
    function handleMouseMove(event: any) {
        setPos({
          x: event.clientX - event.target.offsetLeft,
          y: event.clientY - event.target.offsetTop
        });
    }
    
    const handleScroll = (e) => {
        let rect = document.querySelector('.photos')?.getBoundingClientRect();
        setPos({
            x: window.scrollX,
            y: window.scrollY
        });
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            let idea = 'fetchNextData()';
            console.log('bottom')
        }
        if (rect.bottom <= 0) {
            setPos({...pos(), y: 0})
        }
        if (rect.top >= 10) {
            setPos({...pos(), y: 0})
        } 
        console.log(window.scrollY, rect.top)
    };

    createEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    const isFixed = () =>
        pos().y > 0 ? 'fixed' : ''

    return <div >
        <h2>Photo album</h2>
        <input
            type="range"
            min="1"
            max="10"
            value={selected()}
            onInput={e => setSelected(e.currentTarget.value)}
            // align this to the middle of window
            style={{ position:isFixed(),top: 0, left: '36%' }}
        />
        <div style={{}}>
            <div class="photos" style={{ 'grid-template-columns': `repeat(${selected()}, 1fr)` }}>
                <For each={photos()} fallback={<p>Loading...</p>}>{photo =>
                    <figure>
                        <img src={photo.thumbnailUrl} alt={photo.title} elementtiming={""} fetchpriority={"high"} />
                        <figcaption style={{ "font-size": '7px' }}>{photo.title}</figcaption>
                    </figure>
                }</For>
            </div>
        </div>
        {pos().y}

    </div>;

}