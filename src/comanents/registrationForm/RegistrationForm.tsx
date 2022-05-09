// import React from "react";
// import { Form, Input, InputNumber, Button } from 'antd';
// import s from './registrationForm.module.scss'

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// /* eslint-disable no-template-curly-in-string */

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };
// /* eslint-enable no-template-curly-in-string */

// const RegistrationForm = () => {
//   const onFinish = (values: any) => {
//     alert(values);
//   };

//   return (
//     <div className={s.registrationForm}>
//       <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//         <Form.Item
//           name={['user', 'name']}
//           label="Name"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name={['user', 'email']}
//           label="Email"
//           rules={[
//             {
//               type: 'email',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name={['user', 'age']}
//           label="Age"
//           rules={[
//             {
//               type: 'number',
//               min: 0,
//               max: 99,
//             },
//           ]}
//         >
//           <InputNumber />
//         </Form.Item>

//         <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };


// export default RegistrationForm


import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import s from './registrationForm.module.scss'

const RegistrationForm = () => {

  return (
    <>
      <Formik 
        initialValues={{ name: '', password: '', email: '', checkbox: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(1, 'min 1')
            .max(20, 'max 20')
            .required("require"),
          password: Yup.string()
            .min(1, 'min 1')
            .max(20, 'max 20')
            .required("require"),
          email: Yup.string()
            .min(1, 'min 1')
            .max(20, 'max 20')
            .required("require"),
          checkbox: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
            .required("require"),
        })}
        onSubmit={(values) => {
          alert(values)
        }}
      >
        <Form className={s.registrationForm} >
          <div>
            <label htmlFor="name">name</label>
            <Field name="name" type='text' placeholder="name" />
            <ErrorMessage className={s.ErrorMessage} name="name" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <Field name='email' type='email' placeholder='email' />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <Field name='password' type='password' placeholder='password' />
            <ErrorMessage name="password" />
            <div>
              <Field name='checkbox' type="checkbox" placeholder='password' />
              <ErrorMessage name="checkbox" />
            </div>
          </div>
          <div>
            <button type="submit" >submit</button>
          </div>
        </Form>
      </Formik>
    </>

  )
}
export default RegistrationForm