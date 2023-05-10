import type { Component } from 'solid-js';
import styles from './App.module.css';
import Home from './home/Home';

const App: Component = () => {
  return (
    <div class={styles.App + ' html'}>
      <Home name='aaa'/>
      <header class={styles.header}>
      </header>
    </div>
  );
};

export default App;
