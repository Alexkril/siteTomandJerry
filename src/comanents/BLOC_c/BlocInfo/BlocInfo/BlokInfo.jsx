import React from "react";
import imgTomJerry from '../../../../assets/img/XXL.jpg'
import clases from '../BlocInfo/BlokInfo.module.scss';
import SliderFoto from "../../../common/slider/SliderFoto";

const BlokInfo = (props) => {

    return (

        <div>
            <div className={clases.BlokInfo} >
                    <img src={imgTomJerry} alt="" />
            </div>
            <SliderFoto />
        </div>
    );
}
export default BlokInfo;