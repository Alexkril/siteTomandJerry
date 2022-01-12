import React from "react";
import clases from './Abonent.module.css'
import imghh from '../../../../assets/img/h1.png'
import { Link } from "react-router-dom";

const Ab = (props) => {
    let Adres = "/Test1/" + props.id

    return (
        <div className={clases.Abonent}>
            <img src={imghh} alt="" />
            <Link to={Adres}> {props.name } {props.id}</Link>


        </div>
    );
}

const Abonent = (props) => {
    let AbData = [
        { id: 1, name: 'Lex' },
        { id: 2, name: 'Lexd' },
        { id: 3, name: 'Lexdf' },
    ]
    let AbElem = AbData.map((a) => <Ab name={a.name} id={a.id} />)

    return (
        <div className={clases.Abonent}>
            {AbElem}
        </div>
    );
}
export default Abonent;