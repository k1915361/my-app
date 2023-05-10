import styles from './Header.module.css';
import './scrollUiFix.css';

export default function Header (props: any){
    const {name, style, children} = props 
    
    return <div class={styles.Header + ' header'}>
        <h1>header</h1>
    </div>
}