import { render } from 'solid-js/web';
import { createSignal, createEffect } from 'solid-js';
import styles from '../ui/Button.module.css';

export default function CounterButton() {
    const [count, setCount] = createSignal(0);

    const increment = () => setCount(c => c + 1)

    return <button class={styles.button} onClick={increment}>
        <span>Counter {count()}</span>
    </button>;
}