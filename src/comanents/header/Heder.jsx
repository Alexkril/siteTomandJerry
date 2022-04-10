import React from "react";
import HeaderCont from './HederCont';
import clases from './heder.module.scss'

const Heder = () => {
    return (
        <div className={clases.heder}>
           <HeaderCont />
        </div>
    );
}
export default Heder;