import { createSignal, Show } from "solid-js";
import ClickOutside from "./click-outside";
import "./Modal.css";
import { Button } from "../../../ui/Button";

export default function Modal() {
  const [show, setShow] = createSignal(false);

  return (
    <Show
      when={show()}
      fallback={
        <Button onClick={(e) => setShow(true)}>Open Modal</Button>}
    >
      <div class="modal" use:ClickOutside={() => setShow(false)}>
        Some Modal
      </div>
    </Show>
  );
}