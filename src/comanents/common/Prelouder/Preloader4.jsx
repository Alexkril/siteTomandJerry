import React from "react";
import prelouder4 from '../../../assets/prelouder/4.gif'
import s from './preloader.module.scss'

const Preloader4 =()=>{
    return(
        <div className={s.preloader}>
            <img src={prelouder4} />
        </div>
    )
}
export default Preloader4;