import React from "react";
import clases from './../BlocPage/BlocPage.module.css';
import Price from './../../../Price/Price';
import BlokInfo from './../../BlocInfo/BlocInfo/BlokInfo';
import Grum from './../../../Grum/Grum';
import Galereya from './../../../Galereya/Galereya';
import Reviews from './../../../Reviews/Reviews';
import Dialogs from "../../../Dialog/Dialogs";
import { Route, Routes } from "react-router-dom";
import Test1 from "../../Test1/Test1";
import Test2 from "../../..//Test2/Test2";
import Test3 from "../../../Test3/Test3";

const BlocPage = (props) => {

    return (

        <div className={clases.BlocInfoPage}>



            <div>
                <Routes>
                    <Route path="/" element={<BlokInfo />} />
                    <Route path="/Grum/" element={<Grum />} />
                    <Route path="/Price/" element={<Price />} />
                    <Route path="/Galereya/" element={<Galereya />} />
                    <Route path="/Reviews/" element={<Reviews ClientRevievs={props.ClientRevievs}
                        postRev={props.postRev} />} />
                    <Route path="/Dialogs/" element={<Dialogs massedesData={props.massedesData}
                        DialogsData={props.DialogsData} />} />
                    <Route path="/Dialogs/:id" element={<Dialogs massedesData={props.massedesData}
                        DialogsData={props.DialogsData}
                        addMessDialog={props.addMessDialog}
                    />} />

                </Routes>
                <Routes>
                    <Route path="/Test1/" element={<Test1
                        testmassegeData={props.testmassegeData}
                        addtestmassegeData={props.addtestmassegeData}
                        onChengeMasse={props.testmassegeData.onChengeMasse}
                        nevTest1 ={ props.nevTest1}
                        nevTextTest1={props.nevTextTest1}
                    />} />

                    {/* <Route path="/Test2/" element={<Test2 GrumTebl={props.GrumTebl}
                        addGrumTebl={props.addGrumTebl} />} />

                    <Route path='/Test3/' element={<Test3
                            MassegeTest3Data={props.MassegeTest3Data}
                            TestvDate={props.TestvDate}
                            addtestDate={props.addtestDate}
                            
                        />}
                    /> */}
                </Routes>
            </div>

        </div>

    );
}
export default BlocPage;