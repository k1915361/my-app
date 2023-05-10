import styles from './TextLink.module.css';

export const Link = (props: any) => {
    const {text, style, children} = props
    
    return <button class={styles.parent}>
        <p class={styles.text}>{text}</p>
        <div>{children}</div>
    </button>
}