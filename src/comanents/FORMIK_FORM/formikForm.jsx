import React from "react";
import { useFormik } from 'formik';
import clases from './../Grum/grum.module.scss'


// const FormikForm =()=>{
//     return(
//         <>
//         </>
//     )
// }
// export default FormikForm

const SignupForm = () => {
    
    const formik = useFormik({
        initialValues: {
            email: '',
            // password: '',
            // lastName: '',
        },

        onSubmit: values => {
           //alert(JSON.stringify(values, null, 2));
            console.log('f', formik.values.email)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={clases.formikStyle}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            {/* <div>
            <label htmlFor="password">Email password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />
            </div> */}
            {/* <div>
                <label htmlFor="lastName">lastName</label>
                <input 
                id= "lastName"
                name="lastName"
                type="textaria" 
                onChange={formik.handleChange}
                value={formik.values.lastName}
                />

            </div> */}
            <button type="submit">Submit</button>
        </form>


    );
};
export default SignupForm
