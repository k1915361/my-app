import { createSignal } from 'solid-js';
import './sidebar.css';
import SidebarButton from './sidebar-button';

export default function Sidebar(props: any) {
    const { name, style, children } = props
    const [selected, select] = createSignal('Dashboard');

    return <div class='sidebar'>
        <ul class='sidebar-menu'>
            <li><SidebarButton selected={selected} select={select} text='Dashboard' /></li>
            <li><SidebarButton selected={selected} select={select} text='Search' /></li>
            <li><SidebarButton selected={selected} select={select} text='Sharing' icon='people' /></li>
            <li><SidebarButton selected={selected} select={select} text='Library' icon='more_horiz' /></li>
        </ul>
    </div>
}