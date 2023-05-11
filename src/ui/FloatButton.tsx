import styles from './FloatButton.module.css';

export default function FloatButton(props: any) {
    const {addstyle, style, onClick} = props 
    
    return <div 
        class={style || styles.FloatButton +' '+addstyle} 
        onClick={onClick}>
        <div>{props.icon} {props.name}</div>
    </div>
}