import React from "react";
import clases from '../ClientRevievs/ClientRevievs.module.scss'

const ClientRevievsR =(props)=>{
    return (
     <div>{props.ClientReviev}</div>
    );
}


const ClientRevievs = (props) => {

    // let ClientRevievs =[
    //     {id: 1,  ClientReviev: 'спасибо? были у вас в прощсе отлично'},
    //                 ]

    let ClientRevievsElement = props.ClientRevievs
     .map( ClientReviev =><ClientRevievsR ClientReviev={ClientReviev.ClientReviev}/> )
    return (
       
        <div className={clases.ClientRevievs} >
            {ClientRevievsElement}
          
        </div>
    );
}
export default ClientRevievs;

 {/* <ClientRevievsR ClientReviev={ClientRevievsData [0].ClientReviev}/>
           <ClientRevievsR ClientReviev={ClientRevievsData [1].ClientReviev}/> */}