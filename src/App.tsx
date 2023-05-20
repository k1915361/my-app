import type { Component } from 'solid-js';
import Home from './ui/layout/home/Home';
import './ui/helper/helper.css';
import './ui/layout/home/layout.css';
import SidebarLeft from './ui/layout/sidebar/left/sidebar-left';
import Header from './ui/layout/header/header';
import SidebarRight from './ui/layout/sidebar/right/sidebar-right';
import ScrollButton from './ui/scroll/button/scroll';

const App: Component = () => {
    let main;

    return <div class="container " >
        <div class="header"><Header /></div>
        <div class="sidebar-left"><SidebarLeft /></div>
        <div class="main" ref={main} onscroll={e => e.currentTarget.scrollTop}>
            <Home />
            <ScrollButton text='Scroll to' ref={()=>main}/>
        </div>
        <div class="sidebar-right"><SidebarRight /></div>
    </div>
};

export default App;
