import { createSignal } from 'solid-js';
import styles from './FloatButton.module.css';

export default function FloatButton (props: any){
    const {style, children, onClick} = props 
    const [icon, seticon] = createSignal(props.icon);
    const [name, setname] = createSignal(props.name);
    
    return <div class={styles.FloatButton} onClick={onClick}>
        <div>{icon()} {name()}</div>
        <div>{children}</div>   
    </div>
}