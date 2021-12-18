import React from "react";
import imgFoto from '../../../../../assets/galery/img11.jpeg';
import imgFoto1 from '../../../../../assets/galery/img111.jpeg';

import imgFoto2 from '../../../../../assets/galery/img33.jpeg';
import imgFoto3 from '../../../../../assets/galery/img333.jpeg';

import imgFoto4 from '../../../../../assets/galery/img44.jpeg';
import imgFoto5 from '../../../../../assets/galery/img444.jpeg';

import imgFoto6 from '../../../../../assets/galery/img55.jpeg';
import imgFoto7 from '../../../../../assets/galery/img555.jpeg';

import clases from './../BlocFotoItem/BlokFotoitem.module.css'



const BlocFotoItem = (props) => {
    return (
        <div className={clases.BlokFotoItem} >
            <div>
                <img  src={imgFoto}/>
            </div>
            <div>
                <img  src={imgFoto1}/>
            </div>
            <div>
                <img  src={imgFoto2}/>
            </div>
            <div>
                <img  src={imgFoto3}/>
            </div>
            <div>
                <img  src={imgFoto4}/>
            </div>
            <div>
                <img  src={imgFoto5}/>
            </div>
            
            
        </div>
    )
   
}
export default BlocFotoItem;