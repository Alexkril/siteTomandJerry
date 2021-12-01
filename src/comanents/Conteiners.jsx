import React from "react";
import { Route, Routes } from "react-router-dom";
import Heder from './header/Heder'
import SiteBar from "./BLOC_c/SiteBar/SiteBar";
import BlokInfoPage from './BLOC_c/BlocInfo/BlocInfoPage/BlocInfoPage'
import BlokFoto from './BLOC_c/BlocInfo/BlockFoto/BlocFoto'
import Footer from './footer/Footer';
import Page4 from "./page4/page3/Page4";
import Page2 from "./page2/page2List/Page2";
import Page33 from "./page3/page3/Page33";

const Conteiners = () => {
    return (
        <div className='Conteiners'>
            <Heder />
            <SiteBar />
            <div>
                <Routes>
                    <Route exact path="/" element={<BlokInfoPage />} />
                    <Route exact path="/page4" element={<Page4 />} />
                    <Route exact path="/page2" element={<Page2 />} />
                    <Route exact path="/page3" element={<Page33 />} />
                </Routes>
            </div>
            <BlokFoto />
            <Footer />
        </div>

    );
}
export default Conteiners;