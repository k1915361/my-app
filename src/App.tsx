import type { Component } from 'solid-js';
import styles from './App.module.css';
import Home from './home/Home';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Home name='E'/>
      <header class={styles.header}>
      </header>
    </div>
  );
};

export default App;
