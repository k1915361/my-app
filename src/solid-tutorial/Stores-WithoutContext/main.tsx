import counter from "./counter"

export default function WithoutContextCounter() {
  const { count, doubleCount, increment } = counter;

  return (
    <button type="button" onClick={increment}>
      {count()} {doubleCount()}
    </button>
  );
}