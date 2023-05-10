import { createSignal, Suspense, Switch, Match, useTransition } from "solid-js";
import Child from "./child";
import "./styles.css";
import { Tab } from "./tab";

export const TransitionsTabs = () => {
  const [tab, setTab] = createSignal(0);
  const updateTab = (index: number) => () => setTab(index);

  return (
    <>
      <ul class="inline">
        <Tab updateTab={updateTab} tab={tab} text='Uno' number={0}/>
        <Tab updateTab={updateTab} tab={tab} text='Dos' number={1}/>
        <Tab updateTab={updateTab} tab={tab} text='Tres' number={2}/>
    </ul>
      <div class="tab">
        <Suspense fallback={<div class="loader">Loading...</div>}>
          <Switch>
            <Match when={tab() === 0}>
              <Child page="Uno" />
            </Match>
            <Match when={tab() === 1}>
              <Child page="Dos" />
            </Match>
            <Match when={tab() === 2}>
              <Child page="Tres" />
            </Match>
          </Switch>
        </Suspense>
      </div>
    </>
  );
};