import { For } from "solid-js";
import { numbersfrom } from "../utility/helper";

export default function OnMountDemo(props: any) {
    return <select value={props.selected()} onInput={e => setSelected(e.currentTarget.value)}>
    <For each={numbersfrom(1,10)}>{
        color => <option value={color}>{color}</option>
    }</For>
    </select>
}
