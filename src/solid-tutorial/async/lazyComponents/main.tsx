import { lazy } from "solid-js";
const Greeting = lazy(() => import("./greeting"));

export default function LazyComponents() {
  return (
    <>
      <h1>Welcome</h1>
      <Greeting name="Jake" />
    </>
  );
}