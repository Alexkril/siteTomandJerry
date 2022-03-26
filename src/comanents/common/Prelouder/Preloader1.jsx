import React from "react";
import prelouder1 from '../../../assets/prelouder/1.gif'
import s from './preloader.module.scss'

const Preloader1 =()=>{
    return(
        <div className={s.preloader}>
            <img src={prelouder1} />
        </div>
    )
}
export default Preloader1;