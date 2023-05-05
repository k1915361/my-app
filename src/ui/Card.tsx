import styles from './Card.module.css';

export default function Card (props: any){
    const {name, style, children} = props 
    
    return <div class={styles.card}>
        <p>Hello {name}</p>
        <div>{children}</div>
    </div>
}