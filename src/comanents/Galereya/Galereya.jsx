
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clases from './galereya.module.scss';
import { nevGaleryMassegeCreator } from '../../reduser/galeryReduser'
import { useFormik } from "formik";

const Galereya = (props) => {

    const dispatch = useDispatch
    const re = useSelector(state => state.galereya.galeryMassegeDate)
   // console.log('fjfjfjfjf', re)
    const formik = useFormik({
        initialValues: {
            addPost: 'string'
        },
        onSabmit: (value) => {
            // e.preventDefault();
            // console.log('formik', values)
            dispatch(nevGaleryMassegeCreator(value.addPost))
        }
    })
    console.log('formif', formik.values.addPost)


    return (
        <div>
            <div className={clases.galereya}><h2>галерея</h2></div>
            <div>
                <form onSubmit={formik.handleSubmit} className={clases.formikStyle}>
                    <label htmlFor="addPost">Email Address</label>
                    <input
                        id="addPost"
                        name="addPost"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.addPost}
                    />
                    <button type="submit">Submit</button>
                </form>

                {re.map(g => {
                    return <div> {g.text}   </div>
                })}
            </div>
        </div >
    );
}

export default Galereya