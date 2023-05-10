import { createSignal, createEffect, on } from "solid-js";

export const Reactivity_On = () => {
  const [a, setA] = createSignal(1);
  const [b, setB] = createSignal(1);

  createEffect(on(a, (a) => {
    console.log(a, b());
  }, { defer: true }));

  return <>
    <button onClick={() => setA(a() + 1)}>Increment A</button>
    <button onClick={() => setB(b() + 1)}>Increment B</button>
  </>
};