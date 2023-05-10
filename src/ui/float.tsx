import styles from './float-ui.module.css';

export default function Float(props: any){
    const {addstyle, style, onClick} = props 
    
    return <div 
        class={style || styles.FloatButton +' '+addstyle} 
        onClick={onClick}>
        <div>{props.icon} {props.name} {props.children}</div>
    </div>
}