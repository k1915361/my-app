import { createSignal, For } from "solid-js";
import ColoredList from "./colored-list";
import { toggleSet } from "../../../../utility/helper";
import { Button } from "../../../Button";

export default function ChildrenCreateEffect() {
    const [color, setColor] = createSignal("purple");

    return <>
        <ColoredList color={color()}>
            <For each={["1. List items inside a parent component"
                , "2. Pass each item to a child component"
                , "3. Let the parent apply styles to each child"]}
            >{item =>
                <div>{item}</div>}
            </For>
        </ColoredList>
        <Button onClick={() => toggleSet(setColor, "purple | green")}
        >Set Color</Button>
    </>;
}