import React from "react";
import clases from './ClientFoto.module.css'
import img7 from '../../../../assets/img/img7.png';

const ClientName =(props) =>{
return (
    <div className={clases.ClientFoto}>{props.nameFotos}</div>
);
}

const ClientFoto = (props) => {

    let ClientFotoData = [
        {id: 1, nameFoto:'lIZAVETA'},
       
    ]
    let ClientFotoElement = ClientFotoData 
    .map ((nameFoto) => <ClientName nameFotos ={nameFoto.nameFoto}/>)
    return (
        <div className={clases.ClientFoto}>
            <img src={img7} alt="" />
            {ClientFotoElement}
            {/* <ClientName nameFotos ={ClientFotoData[0].nameFoto}/> */}
        </div>
    );
}
export default ClientFoto;