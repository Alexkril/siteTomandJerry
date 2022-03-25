import React from "react";
import clases from '../BlocInfoPage/BlocInfoPage.module.css';
import BlokInfo from "../BlocInfo/BlokInfo";
import Page2 from './../../../../comanents/page2/page2List/Page2';
import Page33 from "../../../page3/page3/Page33";
import Page4 from "../../../page4/page3/Page4";
import Price from './../../../Price/Price';


const BlocInfoPage = () => {

    return (

        <div className={clases.BlocInfoPage}>
            
            <BlokInfo/>
            <Price/> 
          
        </div>

    );
}
export default BlocInfoPage;