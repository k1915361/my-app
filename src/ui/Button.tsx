import styles from './Button.module.css';

export const Button = (props: any) => {
    const {name, style, children, onClick} = props
    
    return <button 
        onClick={onClick}
        style={style}
        class={styles.button || 'button'}>
        {name}
        <div>{children}</div>
    </button>
}