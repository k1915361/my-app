import { createSignal } from 'solid-js';
import './bottomNavbar.css';
import Navbutton from './navbutton';

export default function BottomNavbar (props: any){
    const {name, style, children} = props 
    const [selected, select] = createSignal('Dashboard');

    return <div class='Bottom'>
        <Navbutton selected={selected} select={select} text='Dashboard'  />
        <Navbutton selected={selected} select={select} text='Search' />
        <Navbutton selected={selected} select={select} text='Sharing' icon='people'/>
        <Navbutton selected={selected} select={select} text='Library' icon='more_horiz'/>
    </div>
}