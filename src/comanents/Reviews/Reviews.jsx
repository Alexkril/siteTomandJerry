import React from "react";
import clases from './../Reviews/Reviews.module.css';
import ReviewsGrup from "./ReviewsGrup/ReviewsGrup";



const Reviews = (props) => {

    let Text = React.createRef();
    let Text1 = () => {
        let t = Text.current.value;
        props.postRev(t);
    }
    


    return (
        <div className={clases.Reviews} >
            <div>
                <h2>Отзывы о наших работах</h2>
                <div>
                    <h4>Ваш питомец</h4>
                    <div>
                        <select >
                            <option value="cet">cet</option>
                            <option selected value="dog">dog</option>
                            <option value="mug">mustang</option>
                        </select>
                        
                    </div>
                </div>

                <div>
                    <form >
                        <label className={clases.Reviews}>
                            <input />
                        </label>
                        <button >OK</button>
                    </form>
                </div>

                <textarea ref={Text}></textarea>
            </div>

            <div>
                <button onClick={Text1}>добавить <br /> отзыв</button>
            </div>
            <ReviewsGrup ClientRevievs={props.ClientRevievs} />
        </div>
    );
}
export default Reviews;