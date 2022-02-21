import React from "react";
import clases from './../BlocPage/BlocPage.module.css';
import Price from './../../../Price/Price';
import BlokInfo from './../../BlocInfo/BlocInfo/BlokInfo';
import Grum from './../../../Grum/Grum';
import Reviews from './../../../Reviews/Reviews';
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "../../../Dialog/DialogsContainer";
import Test1Container from "../../Test1/Test1Container";
import GalereyaContainer from '../../../Galereya/GalereyaContainer'
import Test31Container from "../../../Test3/Test31/Test31Container";

const BlocPage = (props) => {
   
    return (

        <div className={clases.BlocInfoPage}>
            <div>
                <Routes>
                    <Route path="/" element={<BlokInfo />} />
                    <Route path="/Grum/" element={<Grum />} />
                    <Route path="/Price/" element={<Price />} />
                    <Route
                        path="/Galereya/"
                        element={
                            <GalereyaContainer
                                galeryMassegeDate={props.galeryMassegeDate}
                                dispatch={props.dispatch} />}
                        addGaleryMassege={props.addGaleryMassege} />

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
                                massedesData={props.massedesData}
                                DialogsData={props.DialogsData}
                                addPageMassege={props.addPageMassege}
                                dispatch={props.dispatch}
                                store={props.store}
                            />}
                    />
                    <Route
                        path="/Dialogs/:id" element={<DialogsContainer />}
                    />
                    <Route path="/Test1/" element={<Test1Container
                        testmassegeData={props.testmassegeData}
                        dispatch={props.dispatch}
                        onChengeMasse={props.testmassegeData.onChengeMasse}
                        nevTest1={props.nevTest1}
                        store={props.store}

                    />} />
                    <Route path='/Test3/' element={<Test31Container
                        MassegeTest3Data={props.MassegeTest3Data}
                        testvDate={props.testvDate}
                        addtestDate={props.addtestDate}
                        addTextTest3={props.addTextTest3}
                        test3OnText={props.test3OnText}
                        store={props.store}
                        dispatch={props.dispatch}
                    />}
                    />



                </Routes>





            </div>

        </div>

    );
}
export default BlocPage;