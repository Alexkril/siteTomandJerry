import React from "react";
import clases from './../BlocPage/BlocPage.module.css';
import Price from './../../../Price/Price';
import BlokInfo from './../../BlocInfo/BlocInfo/BlokInfo';
import Grum from './../../../Grum/Grum';
import Galereya from './../../../Galereya/Galereya';
import Reviews from './../../../Reviews/Reviews';
import { Route, Routes } from "react-router-dom";
import Test2 from "../../..//Test2/Test2";
import Test3 from "../../../Test3/Test3";
import DialogsContainer from "../../../Dialog/DialogsContainer";
import Test1Container from "../../Test1/Test1Container";
import GalereyaContainer from '../../../Galereya/GalereyaContainer'
const BlocPage = (props) => {

    return (

        <div className={clases.BlocInfoPage}>
            <div>
                <Routes>
                    <Route path="/" element={<BlokInfo />} />
                    <Route path="/Grum/" element={<Grum />} />
                    <Route path="/Price/" element={<Price />} />

                    <Route path="/Galereya/" element={<GalereyaContainer
                        store={props.store}/>} 
                        />

                    <Route
                        path="/Reviews/"
                        element={
                            <Reviews
                                ClientRevievs={props.ClientRevievs}
                                postRev={props.postRev} />} />

                    <Route
                        path="/Dialogs/"
                        element={
                            <DialogsContainer
                                store={props.store}
                            />}
                    />
                    <Route
                        path="/Dialogs/:id" element={<DialogsContainer />}
                    />
                    <Route path="/Test1/" element={<Test1Container

                        store={props.store}

                    />} />
                    {/* <Route path='/Test3/' element={<Test3
                        MassegeTest3Data={props.MassegeTest3Data}
                        testvDate={props.testvDate}
                        addtestDate={props.addtestDate}
                        addTextTest3 ={props.addTextTest3}
                        test3OnText={props.test3OnText}

                        
                    />}
                    /> */}



                </Routes>





            </div>

        </div>

    );
}
export default BlocPage;