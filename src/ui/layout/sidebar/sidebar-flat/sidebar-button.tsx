import './sidebar-button.css';
import 'material-icons/iconfont/outlined.css';

export default function SidebarButton({ text, children = '', selected, select, icon = text.toLowerCase() }) {

    return <button
        class='sidebar-iconbox'
        onClick={() => select(text)}
    >
        <span
            classList={{ selected: selected() === text }}
            class='sidebar-icon material-icons-outlined'>{icon}
        </span>
        <span class='text'>{text}</span>
        <span>{children}</span>
    </button>
}