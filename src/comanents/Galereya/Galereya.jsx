
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clases from './galereya.module.scss';
import { nevGaleryMassegeCreator } from '../../reduser/galeryReduser'
import { useFormik } from "formik";

const Galereya = (props) => {

    const dispatch = useDispatch
    const re = useSelector(state => state.galereya.galeryMassegeDate)
    const formik = useFormik({
        initialValues: {
            email: '',
            // password: '',
            // lastName: '',
        },

        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(nevGaleryMassegeCreator(values.email))
            console.log('f', formik.values.email)
        },
    });

    return (
        <div>
            <div className={clases.galereya}><h2>галерея</h2></div>
            <div>
                <form onSubmit={formik.handleSubmit} className={clases.formikStyle}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}

                    />
                    <button type="submit">Submit</button>
                </form>


                {re.map(g => {
                    return <div> {g.email}   </div>
                })}
            </div>
        </div >
    );
}

export default Galereya