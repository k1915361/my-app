import type { Component } from 'solid-js';
import Home from './ui/layout/home/Home';
import './ui/helper/helper.css';
import './ui/layout/home/layout.css';
import SidebarLeft from './ui/layout/sidebar/left/sidebar-left';
import Header from './ui/layout/header/header';
import SidebarRight from './ui/layout/sidebar/right/sidebar-right';

const App: Component = () => {
    return <div class="container ">
    <div class="header"><Header/></div>
    <div class="sidebar-left"><SidebarLeft/></div>
    <div class="main">
        <Home />
    </div>
    <div class="sidebar-right"><SidebarRight/></div>
</div>
};

export default App;
