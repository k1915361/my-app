import type { Component } from 'solid-js';
import Home from './ui/layout/home/Home';
import './ui/helper/helper.css';
import './ui/layout/home/layout.css';
import SidebarLeft from './ui/layout/sidebar/left/sidebar-left';
import Header from './ui/layout/header/header';
import SidebarRight from './ui/layout/sidebar/right/sidebar-right';
import Container from './ui/container/container';

const App: Component = () => {
    let app;
    return <Container ref={app}>
        <Header />
        <SidebarLeft />
        <Home app={() => app} />
        <SidebarRight app={() => app}/>
    </Container>
};

export default App;