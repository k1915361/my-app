import { CounterProvider } from "./CounterProvider";
import CounterProviderNested from "./CounterProviderNested";

export default function CounterProviderMain() {
  return <>
    <CounterProvider count={1}>
        <h1>Welcome to Counter App</h1>
        <CounterProviderNested />
    </CounterProvider>
  </>
};