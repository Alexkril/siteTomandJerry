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
    <div>
      <button className={clases.SiteBarMeny} >
        <div className="SiteBarIcons">
          <img src={imgName5} className={clases.imgIcon} alt='' />
        </div>
        <NavLink className="SiteBarMenyT" to='/'>главная</NavLink>
      </button>



      <button className={clases.SiteBarMeny} >

        <div className="SiteBarIcons">
          <img src={imgName} className={clases.imgIcon} alt='' />
        </div>
        <NavLink to='/Grum' className="SiteBarMenyT">груминг</NavLink>
      </button>




      <button className={clases.SiteBarMeny} >
        <div className="SiteBarIcons">

          <img src={imgName2} className={clases.imgIcon} alt='' />
        </div>
        <NavLink to="/Price" className="SiteBarMenyT">прайс</NavLink>
      </button>

      <button className={clases.SiteBarMeny} >
        <div className="SiteBarIcons">

          <img
            src={imgName3} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <NavLink className="SiteBarMenyT" to="/Galereya" >галерея</NavLink>
      </button>

      <button className={clases.SiteBarMeny} >
        <div className="SiteBarIcons">

          <img
            src={imgName4} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <NavLink className="SiteBarMenyT" to="/Reviews">отзывы</NavLink>
      </button>
      <button className={clases.SiteBarMeny} >
        <div className="SiteBarIcons">

          <img
            src={imgName6} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <NavLink className="SiteBarMenyT" to="/Dialogs">ЧАТ</NavLink>
      </button>

    </div>
  );
};
export default SiteBarMeny;
