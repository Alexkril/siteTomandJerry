import React from "react";
import clases from './../Reviews/Reviews.module.css';
import ReviewsGrup from "./ReviewsGrup/ReviewsGrup";



const Reviews = (props) => {





    return (
        <div className={clases.Reviews} >
            <div>
                <h2>Отзывы о наших работах</h2>
                <textarea></textarea>
            </div>
            <div>
                <button>добавить <br/> отзыв</button>
            </div>
            <ReviewsGrup ClientRevievs={props.ClientRevievs}/>
        </div>
    );
}
export default Reviews;