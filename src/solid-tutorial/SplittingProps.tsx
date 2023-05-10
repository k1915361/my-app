import { createSignal } from "solid-js";

import Greeting from "./greeting";

export default function SplittingProps() {
  const [name, setName] = createSignal("Jakob");

  return <>
    <Greeting greeting="Yo" name={name()} style="color: teal;" />
    <button onClick={() => setName("Jarob")}>Set Name</button>
  </>;
}