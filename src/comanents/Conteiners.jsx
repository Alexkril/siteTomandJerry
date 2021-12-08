import React from "react";

import Heder from './header/Heder'
import SiteBar from "./BLOC_c/SiteBar/SiteBar";
import BlocPage from "./BLOC_c/BlocInfo/BlocPage/BlocPage";
import BlokFoto from './BLOC_c/BlocInfo/BlockFoto/BlocFoto'
import Footer from './footer/Footer';


const Conteiners = () => {
    return (
        <div className='Conteiners'>
            <Heder />
            <SiteBar />
            <BlocPage/>
            <BlokFoto />
            <Footer />
        </div>

    );
}
export default Conteiners;