import type { Component } from 'solid-js';
import styles from './App.module.css';
import Home from './home/Home';
import './ui/helper/helper.css';
import SideBarLeft from './ui/layout/sidebar/left/left';
import { numbersfrom } from './utility/helper';
import App_UseCloudinary from './utility/App-useCloudinary';
import Home_Cloudinary from './ui/cloudinary';
import DropImage from './ui/dropImage';

const App: Component = () => {
    return <div class="container full-height">
    <div class="header"><p>header</p></div>
    <div class="left" > <SideBarLeft /></div>
    <div class="main">
        <App_UseCloudinary />
        <Home_Cloudinary />
        <DropImage />
        <Home />
    </div>
    <div class="right"><p>right</p></div>
    <div class="footer"><p>footer</p></div>
</div>
    // (
    //     <div class={styles.App}>
            
    //     </div>
    // );
};

export default App;
