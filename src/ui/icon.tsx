import 'material-icons/iconfont/outlined.css';
import '../icon.css';

export default function Icon ({text, children, selected, select, icon = text.toLowerCase()}){
    
    return <button 
        onClick={()=>select(text)}
    > 
        <span 
            class='icon'
            classList={{selected: selected() === text}}
            class='material-icons-outlined'>{icon}
        </span>
        <span>{text}</span>
        <span>{children}</span>
    </button>
}