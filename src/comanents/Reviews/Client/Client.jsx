import React from "react";
import clases from './Client.module.css'
import ClientFoto from "./clientfoto/ClientFoto";
import ClientRevievs from "./ClientRevievs/ClientRevievs";


const Client = (props) => {

    return (
        <div className={clases.Client}>
            <ClientFoto />
            <ClientRevievs ClientRevievs={props.ClientRevievs} />
        </div>

    );
}
export default Client;