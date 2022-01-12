import React from "react";
import c from './test213.module.scss'

const Test213 = (props) => {

    return (
        <div className={c.test213}>
            <div> {props.idClient} </div>
            <div> {props.nameClient}</div>
            <div>{props.nameDog}</div>
            <div> {props.dateGrum}</div>
            <div>{props.grumer}</div>
        </div>
    );
}
export default Test213;