import React, { useState } from "react";
import clases from "./PriceContey.module.scss"
import imgPrFoto from './../../../assets/galery/y5.jpg'
import classNames from "classnames";



const PriceContey = (props) => {
  const [transfomfFoto, setTransfomfFoto] = useState(false)
  const [trans, setTrans] = useState(false)
 

  return (
    <div className={clases.PriceContey}>

      <div className={clases.PriceConteyBlock}>
        <div>
          маленькие породы собак: (купание, сушка, стрижка,гигиена)
        </div>
        <div onClick={()=>setTrans(!trans)}>
           от 800 рубл
        </div>

        <div className={clases.PriceFoto}>
          <div className={clases.PriceFoto}>
            <div onClick={() => setTransfomfFoto(!transfomfFoto)} >
              <img src={imgPrFoto} alt="dog" className={classNames(clases.PriceFoto,
               transfomfFoto ? clases.scaleActiv : '', trans? clases.PriceFotoD:''
              )} />
            </div>
          </div>
        </div>


      </div>
    </div>

  );

}
export default PriceContey;