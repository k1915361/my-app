import { createSignal, onMount, For, createEffect } from "solid-js";
import "./onPhotosMount.css";
import '../ui/scrollUiFix.css';
import ScrollFixUi from "../ui/scrollFixUi";

export default function OnMountDemo() {
    const [photos, setPhotos] = createSignal([]);
    const [selected, setSelected] = createSignal(4);
    const [pos, setPos] = createSignal({x: 0, y: 0});

    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        setPhotos(await res.json());
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
            class='float'
            style={{ 
                position:isFixed(),
                top: 0, 
                left: '0%',
            }}
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
        <ScrollFixUi setY={y=>setPos({...pos(), y:y})} y={()=>pos().y} selector='.photos'/>
    </div>;

}