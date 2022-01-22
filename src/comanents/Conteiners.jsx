import React from "react";

import Heder from './header/Heder'
import SiteBar from "./BLOC_c/SiteBar/SiteBar";
import BlocPage from "./BLOC_c/BlocInfo/BlocPage/BlocPage";
import BlokFoto from './BLOC_c/BlocInfo/BlockFoto/BlocFoto'
import Footer from './footer/Footer';
import clases from './Conteiners.module.css'


const Conteiners = (props) => {

    return (
        <div className={clases.Conteiners}>
            <Heder />
            <SiteBar />
            <BlocPage
                ClientRevievs={props.ClientRevievs}
                postRev={props.postRev}
                massedesData={props.massedesData}
                DialogsData={props.DialogsData}
                GrumTebl={props.GrumTebl}
                testmassegeData={props.testmassegeData}
                addGrumTebl={props.addGrumTebl}

                onChengeMasse={props.testmassegeData.onChengeMasse}
                MassegeTest3Data={props.MassegeTest3Data}
                testvDate={props.testvDate}
                addtestDate={props.addtestDate}
                addMessDialog={props.addMessDialog}

                addTextTest3={props.addTextTest3}
                test3OnText={props.test3OnText}
                //addtestmassegeData={props.addtestmassegeData}
                //nevTextTest1={props.nevTextTest1}
                dispatch={props.dispatch}
            />

            <BlokFoto />
            <Footer />

        </div>

    );
}
export default Conteiners;