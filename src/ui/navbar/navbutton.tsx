// import './navbutton.css';
import '../icon.css';
import 'material-icons/iconfont/outlined.css';

export default function Navbutton ({text, children = '', selected, select, icon = text.toLowerCase()}){
    
    return <button 
        class='iconbox'
        onClick={()=>select(text)}> 
        <span 
            classList={{selected: selected() === text}}
            class='icon material-icons-outlined'>{icon}
        </span>
        {text}
        <span>{children}</span>
    </button>
}