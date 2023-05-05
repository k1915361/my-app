import styles from './Header.module.css';

export default function Header (props: any){
    const {name, style, children} = props 
    
    return <div class={styles.Header}>
        <h1>header</h1>
    </div>
}