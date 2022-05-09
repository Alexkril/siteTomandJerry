import React from "react";
import { Formik,  Form, ErrorMessage,  Field } from "formik";
import * as Yup from 'yup';
import clases from './../Grum/grum.module.scss';

// const SignupForm = () => {
//     const formik = useFormik({
//         initialValues: {
//             n: '',
//             firstName: ''
//         },

//         validationSchema: Yup.object({
//             n: Yup.string()
//                 .required('Required')
//                 .max(3, <ExclamationCircleOutlined />),


//         }),
//         onSubmit: (values) => {
//             alert(values.n)
//         }
//     })
//     return (
//         <form onSubmit={formik.handleSubmit} className={clases.formikStyle}>
//             <label htmlFor="n">form</label>
//             <input
//                 name='n'
//                 type="text"
//                 id='n'
//                 onChange={formik.handleChange}
//                 value={formik.values.n}
//             />
//             {formik.touched.n && formik.errors.n ?
//                 (<div>{formik.errors.n}</div>) : null}




//             <button type="submit">f</button>
//         </form>
//     )
// }
const SignupForm = () => {

    return (
        <div>
            <Formik
                initialValues={{ b: '', ff: '' }}
                validationSchema={Yup.object(
                    {
                        b: Yup.string()
                            .min(10, 'effefefef')
                            .required('fefefeff')
                    }
                )}
                onSubmit={(values) => {
                    alert(values.b)
                }}
            >
                <Form  >
                    <Field name="b" type='text' placeholder="Jane"  />
                    <ErrorMessage name="b" />
                    <button type="submit">fd</button>
                </Form>

            </Formik>
        </div>
    )
}
export default SignupForm