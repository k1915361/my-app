import { render } from 'solid-js/web';
import { createSignal, createMemo } from 'solid-js';

function fibonacci(num: number): number {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

export default function CounterMemo() {
  const [count, setCount] = createSignal(10);
  const fib = createMemo(() => fibonacci(count()))

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
      <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>2. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>3. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
    </>
  );
}