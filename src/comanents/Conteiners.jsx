import React from "react";

import Heder from './header/Heder'
import SiteBar from "./BLOC_c/SiteBar/SiteBar";
import BlocPage from "./BLOC_c/BlocInfo/BlocPage/BlocPage";
import BlokFoto from './BLOC_c/BlocInfo/BlockFoto/BlocFoto'
import Footer from './footer/Footer';


const Conteiners = (props) => {
    return (
        <div className='Conteiners'>
            <Heder />
            <SiteBar />
            <BlocPage ClientRevievs={props.ClientRevievs}/>
            <BlokFoto />
            <Footer />
        </div>

    );
}
export default Conteiners;