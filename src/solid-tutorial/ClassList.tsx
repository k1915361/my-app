import { createSignal } from "solid-js";
import "./ClassList.module.css";

export default function ClassList() {
    const [current, setCurrent] = createSignal("foo");

    return <>
        <button
            classList={{ selected: current() === 'foo' }}
            onClick={() => setCurrent('foo')}
        >foo</button>
    </>;
}