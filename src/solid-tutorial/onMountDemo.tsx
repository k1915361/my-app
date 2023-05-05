import { createSignal, onMount, For } from "solid-js";
import "./onMountDemo.css";

export default function OnMountDemo() {
    const [photos, setPhotos] = createSignal([]);

    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        setPhotos(await res.json());
    });

    return <>
        <h1>Photo album</h1>

        <div class="photos">
            <For each={photos()} fallback={<p>Loading...</p>}>{photo =>
                <figure>
                    <img src={photo.thumbnailUrl} alt={photo.title} elementtiming={""} fetchpriority={"high"} />
                    <figcaption>{photo.title}</figcaption>
                </figure>
            }</For>
        </div>
    </>;

}