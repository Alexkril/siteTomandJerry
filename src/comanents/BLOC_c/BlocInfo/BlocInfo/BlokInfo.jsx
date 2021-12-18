import React from "react";
import imgTomJerry from '../../../../assets/img/XXL.jpg'
import clases from '../BlocInfo/BlokInfo.module.css';

const BlokInfo = (props) => {

    return (

        <div class={clases.BlokInfo}>
            <div className='BlokInfoFoto' >
                <img src={imgTomJerry} alt="" />
            </div>
        </div>

    );
}
export default BlokInfo;