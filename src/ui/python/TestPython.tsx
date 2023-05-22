import { createSignal, onMount } from "solid-js";

export default function TestPython() {
    const [data, setData] = createSignal("");
    // const [data] = Resource(() => fetch("~/pythoncode.py", {
    //     method: "POST",
    //     body: JSON.stringify({ param: text })
    // }).then(res => res.json()));

    onMount(async () => {
        const res = await fetch(`src/ui/python/random_word/random_choices.py`, {
            method: "POST",
            body: JSON.stringify({ param: data })
        });
        setData(await res.text());
    });

    return (
        <div>
            {data.loading ? "Loading..." : data()}
        </div>
    );
    return <p> </p>
}
