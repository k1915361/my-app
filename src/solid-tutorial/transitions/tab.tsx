import { createSignal, Suspense, Switch, Match, useTransition } from "solid-js";
import "./styles.css";

export const Tab = ({updateTab, tab:tabb, text, number}) => {

  return <li classList={{ selected: tabb() === number }} 
    onClick={updateTab(number)}
    >{text}</li>
};