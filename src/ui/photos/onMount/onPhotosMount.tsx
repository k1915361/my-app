import { createSignal, onMount, For } from "solid-js";
import "./onPhotosMount.css";
import ScrollFixUi from "../../scrollUiFix";
import RangeSlider from "../../input/range-slider/rangeSlider";

export default function OnPhotosMount() {
    const [photos, setPhotos] = createSignal([]);
    const [selected, setSelected] = createSignal(10);
    const [pos, setPos] = createSignal({ x: 0, y: 0 });

    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        setPhotos(await res.json());
    });

    return <div >
        <h2>Photo album</h2>
        <RangeSlider
            min='1'
            value={selected()}
            onInput={e => setSelected(e.currentTarget.value)}
            clss={pos().y > 0 ? ' sliderfixedtop ' : ''}
        />
        <div >
            <div class="photos" style={{ 'grid-template-columns': `repeat(${selected()}, 1fr)` }}>
                <For each={photos()} fallback={<p>Loading...</p>}>{photo =>
                    <figure>
                        <img src={photo.thumbnailUrl} alt={photo.title} elementtiming={""} fetchpriority={"low"} />
                        <figcaption class='photocaption' >{photo.title}</figcaption>
                    </figure>
                }</For>
            </div>
        </div>
        <ScrollFixUi setY={y => setPos({ ...pos(), y: y })} y={() => pos().y} selector='.photos' />
    </div>;
}