import React from "react";

import imgName from "../../../assets/img/img.png";
import imgName2 from "../../../assets/img/img2.png";
import imgName3 from '../../../assets/img/img3.png';
import imgName4 from '../../../assets/img/img4.png';
import imgName5 from '../../../assets/img/img5.png';
import imgName6 from '../../../assets/img/img6.jpg';
import imgL from './../../../assets/img/len.jpg';
import clases from "./SiteBarMenu.module.scss";
import { NavLink } from "react-router-dom";

const SiteBarMeny = () => {
  return (
    <div>

      <NavLink className={clases.SiteBarMenyT} to='/'>
        <div className={clases.siteBarIcon}>
          <img src={imgName5} className={clases.imgIcon} alt='' />
          <span>главная</span>
        </div>

      </NavLink>

      <NavLink to='/Grum' className={clases.SiteBarMenyT}>
        <div className={clases.siteBarIcon}>
          <img src={imgName} className={clases.imgIcon} alt='' />
          <span>груминг</span> </div>
      </NavLink>

      <NavLink to="/Price" className={clases.SiteBarMenyT}>
        <div className={clases.siteBarIcon}>
          <img src={imgName2} className={clases.imgIcon} alt='' />
          <span>прайс</span>
        </div>
      </NavLink>

      <NavLink className={clases.SiteBarMenyT} to="/Galereya" >
        <div className={clases.siteBarIcon}>
          <img src={imgName3} className={clases.imgIcon} />
          <span>галерея</span>
        </div>
      </NavLink>

      {/* <NavLink className={clases.SiteBarMenyT} to="/Reviews">
        <div className={clases.siteBarIcon}>
          <img src={imgName4} className={clases.imgIcon} />
          <span>отзывы</span>
        </div>
      </NavLink> */}

      <NavLink className={clases.SiteBarMenyT} to="/Dialogs">
        <div className={clases.siteBarIcon}>
          <img src={imgName6} className={clases.imgIcon} />
          <span>ЧАТ</span>
        </div>
      </NavLink>

      <NavLink className={clases.SiteBarMenyT} to="/Test1">
        <div className={clases.siteBarIcon}>
          <img src={imgName6} className={clases.imgIcon} />
          <span>test</span>
        </div>
      </NavLink>

      {/* <NavLink className={clases.SiteBarMenyT} to="/Test2">
        <div className={clases.siteBarIcon}>
          <img src={imgL} className={clases.imgIcon} />
          <span>test2</span>
        </div>
      </NavLink>

      <NavLink className={clases.SiteBarMenyT} to="/Test3">
        <div className={clases.siteBarIcon}>
          <img
            src={imgL} className={clases.imgIcon} />
          <span>test3</span>
        </div>
      </NavLink> */}

     <NavLink className={clases.SiteBarMenyT} to='/Users'>
     <div className={clases.siteBarIcon}>
          <img
            src={imgL} className={clases.imgIcon} />
          <span>Users</span>
        </div>
     
     
     </NavLink>   

    </div>


  );
};
export default SiteBarMeny;
