import "./styles.css";

export const Tab = ({setTab, selected, text, number}) => {

  return <li classList={{ selected: selected() === number }} 
    onClick={setTab(number)}
    >{text}</li>
};