import React from "react";
import clases from './PriceFoto.module.scss';
import imgPrFoto from './../../../assets/galery/y5.jpg'

const PriceFoto = () => {
    return (
        <div className={clases.PriceFoto}>
<img src={imgPrFoto} alt="" />
           
                
           

        </div>
    );

}
export default PriceFoto;