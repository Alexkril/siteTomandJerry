import React, { useEffect, useState } from "react";
import clases from "./PriceContey.module.scss"
import imgPrFoto from './../../../assets/galery/y5.jpg'
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addPriceActionCreetor, PriceReduser } from '../../../reduser/priceReduser'
import { AppStateType } from "../../../redaxStore";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';


const PriceContey = () => {
  const dispatch = useDispatch()
  const [transfomfFoto, setTransfomfFoto] = useState(false)
  const [trans, setTrans] = useState(false)



  // const [buttonDisable, setButtonDisable] = useState(true)
  // useEffect(() => {
  //   if (values.prise.length > 0) {
  //     setButtonDisable(false)
  //   }
  //   else setButtonDisable(true)
  // }, [formik.values.prise])

  const interPrise: PriceReduser = useSelector((state: AppStateType) => state.price)
  console.log('interPrise', interPrise)


  return (
    <div>
      <Formik
        initialValues={{ name: '', text: '', colors:''}}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(5, 'gigigjrijgirgjirgi'),
            
           
           

        })}
        onSubmit={(values) => { dispatch(addPriceActionCreetor(values.colors )) }}

      >

        <Form>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <Field name="colors" as="select" className="my-select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="colors" />
          
          <button type="submit">fe</button>
        </Form>
      </Formik>

      <div className={clases.form} >

        {interPrise?.prise?.map((pr, index) => {
          return <div key={index}>  {pr.name} </div>
        })}
      </div>
      <div className={clases.PriceContey}>
        <div className={clases.PriceConteyBlock}>
          <div>
            маленькие породы собак: (купание, сушка, стрижка,гигиена)
          </div>
          <div onClick={() => setTrans(!trans)}>
            от 800 рубл
          </div>

          <div className={clases.PriceFoto}>
            <div className={clases.PriceFoto}>
              <div onClick={() => setTransfomfFoto(!transfomfFoto)} >
                <img src={imgPrFoto} alt="dog" className={classNames(clases.PriceFoto,
                  transfomfFoto ? clases.scaleActiv : '', trans ? clases.PriceFotoD : ''
                )} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  );

}
export default PriceContey;