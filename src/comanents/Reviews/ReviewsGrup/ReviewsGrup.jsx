import React from "react";
import clases from '../ReviewsGrup/ReviewsGrup.module.css'
import Client from "../Client/Client";

const ReviewsGrup = (props) => {


    return (

        <div className={clases.ReviewsGrup} >

            <Client />
            {props.massedges}

            {props.massedges}
        </div>


    )
}
export default ReviewsGrup;