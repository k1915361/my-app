import { createSignal, onMount, For, createEffect } from "solid-js";
import "./onPhotosMount.css";
import ScrollFixUi from "../ui/scrollUiFix";

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
            value={selected()}
            onInput={e => setSelected(e.currentTarget.value)}
            class='fixedtop'
            // classList={{fixedtop: pos().y > 0}}
            style={{ position:isFixed() }}
        />
        <div style={{}}>
            <div class="photos" style={{ 'grid-template-columns': `repeat(${selected()}, 1fr)` }}>
                <For each={photos()} fallback={<p>Loading...</p>}>{photo =>
                    <figure>
                        <img src={photo.thumbnailUrl} alt={photo.title} elementtiming={""} fetchpriority={"high"} />
                        <figcaption class='photocaption' >{photo.title}</figcaption>
                    </figure>
                }</For>
            </div>
        </div>
        <ScrollFixUi setY={y=>setPos({...pos(), y:y})} y={()=>pos().y} selector='.photos'/>
    </div>;

}