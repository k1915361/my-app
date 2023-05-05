import styles from './Button.module.css';

export const Button = (props: any) => {
    const {name, style, children} = props
    
    return <div class={styles.button}>
        <p>{name}</p>
        <div>{children}</div>
    </div>
}