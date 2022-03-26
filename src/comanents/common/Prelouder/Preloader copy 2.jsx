import React from "react";
import prelouder from '../../../assets/louding/1495.gif'
import s from './preloader.module.scss'

const Preloader =()=>{
    return(
        <div className={s.preloader}>
            <img src={prelouder} />
        </div>
    )
}
export default Preloader;