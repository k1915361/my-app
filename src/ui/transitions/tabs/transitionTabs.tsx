import { createSignal, Suspense, Switch, Match } from "solid-js";
import Child from "./child";
import "./styles.css";
import { Tab } from "./tab";

export const TransitionsTabs = () => {
    const [tab, setTab] = createSignal(0);
    const onSetTab = (index: number) => () => setTab(index);

    return (
        <>
            <ul class="inline">
                <Tab setTab={onSetTab} selected={tab} text='Uno' number={0} />
                <Tab setTab={onSetTab} selected={tab} text='Dos' number={1} />
                <Tab setTab={onSetTab} selected={tab} text='Tres' number={2} />
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