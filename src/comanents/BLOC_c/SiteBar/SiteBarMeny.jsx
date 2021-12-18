import React from "react";

import imgName from "../../../assets/img/img.png";
import imgName2 from "../../../assets/img/img2.png";
import imgName3 from '../../../assets/img/img3.png';
import imgName4 from '../../../assets/img/img4.png';
import imgName5 from '../../../assets/img/img5.png';
import imgName6 from '../../../assets/img/img6.jpg';
import clases from "./SiteBarMenu.module.css";
import { NavLink } from "react-router-dom";

const SiteBarMeny = () => {
  return (
    <>
      <NavLink className="SiteBarMenyT" to='/'>
        <button className={clases.SiteBarMeny} >
          <picture className="SiteBarIcons">
            <img src={imgName5} className={clases.imgIcon} alt='' />
          </picture>
          главная
        </button>
      </NavLink>

      <NavLink to='/Grum' className="SiteBarMenyT">
        <button className={clases.SiteBarMeny} >
          <picture className="SiteBarIcons">
            <img src={imgName} className={clases.imgIcon} alt='' />
          </picture>
          груминг
        </button>
      </NavLink>

      <NavLink to="/Price" className="SiteBarMenyT">
        <button className={clases.SiteBarMeny} >
          <picture className="SiteBarIcons">
            <img src={imgName2} className={clases.imgIcon} alt='' />
          </picture>
          прайс
        </button>
      </NavLink>

      <NavLink className="SiteBarMenyT" to="/Galereya" >
        <button className={clases.SiteBarMeny} >
          <picture className="SiteBarIcons">
            <img
              src={imgName3} className={clases.imgIcon}
              alt=""
              width="30"
            />
          </picture>
          галерея
        </button>
      </NavLink>

      <NavLink className="SiteBarMenyT" to="/Reviews">
        <button className={clases.SiteBarMeny} >
          <picture className="SiteBarIcons">
            <img
              src={imgName4} className={clases.imgIcon}
              alt=""
              width="30"
            />
          </picture>
          отзывы
        </button>
      </NavLink>

      <NavLink className="SiteBarMenyT" to="/dialogs">
        <button className={clases.SiteBarMeny} >
          <picture className="SiteBarIcons">

            <img
              src={imgName6} className={clases.imgIcon}
              alt=""
              width="30"
            />
          </picture>
          ЧАТ
        </button>
      </NavLink>

    </>
  );
};
export default SiteBarMeny;
