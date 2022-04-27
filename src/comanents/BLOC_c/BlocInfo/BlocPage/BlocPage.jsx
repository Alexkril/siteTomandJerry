import React from "react";
import clases from './../BlocPage/BlocPage.module.css';
import Price from './../../../Price/Price';
import BlokInfo from './../../BlocInfo/BlocInfo/BlokInfo';
import Grum from './../../../Grum/Grum';
import Galereya from './../../../Galereya/Galereya';
import Reviews from './../../../Reviews/Reviews';
import { Route, Routes } from "react-router-dom";
import Dialogs from "../../../Dialog/Dialogs";
import Test1Container from "../../Test1/Test1Container";
import UsersContainer from "../../Users/UsersContainer";
import FindUserContainer from "../../../FindUser/FindUserContainer";
import RegistrationForm from "../../../registrationForm/RegistrationForm";

const BlocPage = (props) => {

    return (

        <div className={clases.BlocInfoPage}>
            <div>
                <Routes>
                    <Route path="/" element={<BlokInfo />} />
                    <Route path="/Grum/" element={<Grum />} />
                    <Route path="/Price/" element={<Price />} />
                    <Route path="/Galereya/" element={<Galereya />}
                   
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
                            <Dialogs />} />
                    <Route
                        path="/login/"
                        element={
                            <RegistrationForm />} />



                    <Route
                        path="/Users/"
                        element={<UsersContainer />} />


                    <Route
                        path="/Dialogs/:id"
                        element={<Dialogs />}
                    />
                    <Route path="/Test1/"
                        element={<Test1Container
                        />} />
                    <Route path="/FindUser/"
                        element={<FindUserContainer
                        />} />





                </Routes>





            </div>

        </div>

    );
}
export default BlocPage;