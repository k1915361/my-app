import { createSignal } from "solid-js";

export default function MousePosition() {
    const [pos, setPos] = createSignal({x: 0, y: 0});

    function handleMouseMove(event: any) {
      setPos({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop
      });
    }
  
    return (
      <div onMouseMove={handleMouseMove} style={{ width: '100%', height: '100%' }}>
        The mouse position is {pos().x} x {pos().y}
      </div>
    );
}