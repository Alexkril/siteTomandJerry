import React from "react";
import BlocFotoItem from './BlocFotoItem/BlokFotoItem.jsx'
import clases from './../BlockFoto/BlokFoto.module.css'

const BlokFoto = () => {
    return (

        <div className={clases.BlokFoto} > 

            
            <BlocFotoItem/>
        </div>
    );
}
export default BlokFoto;