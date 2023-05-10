import { createSignal, Show } from "solid-js";
import ClickOutside from "./click-outside";
import "./Modal.css";

export default function Modal() {
  const [show, setShow] = createSignal(false);

  return (
    <Show
      when={show()}
      fallback={
        <button onClick={(e) => setShow(true)}>Open Modal</button>}
    >
      <div class="modal" use:ClickOutside={() => setShow(false)}>
        Some Modal
      </div>
    </Show>
  );
}