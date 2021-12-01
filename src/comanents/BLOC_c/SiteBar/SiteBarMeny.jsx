import React from "react";
import { Link } from "react-router-dom";
import imgName from "../../../assets/img/img.png";
import imgName2 from "../../../assets/img/img2.png";
import imgName3 from '../../../assets/img/img3.png';
import imgName4 from '../../../assets/img/img4.png';
import imgName5 from '../../../assets/img/img5.png';
import clases from "./SiteBarMenu.module.css";

const SiteBarMeny = () => {
  return (
    <div>
      <button className="SiteBarMeny" >
        <div className="SiteBarIcons">
          <img src={imgName5} className={clases.imgIcon} alt='' />
        </div>
        <Link className="SiteBarMenyT" to='/'>главная</Link>
      </button>



      <button className="SiteBarMeny" >

        <div className="SiteBarIcons">
          <img src={imgName} className={clases.imgIcon} alt='' />
        </div>
        <Link to='/page4' className="SiteBarMenyT">груминг</Link>
      </button>




      <button className="SiteBarMeny" >
        <div className="SiteBarIcons">

          <img src={imgName2} className={clases.imgIcon} alt='' />
        </div>
        <Link to="/page2" className="SiteBarMenyT">прайс</Link>
      </button>

      <button className="SiteBarMeny" >
        <div className="SiteBarIcons">

          <img
            src={imgName3} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <Link className="SiteBarMenyT" to="/page4" >галерея</Link>
      </button>

      <button className="SiteBarMeny" >
        <div className="SiteBarIcons">

          <img
            src={imgName4} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <Link className="SiteBarMenyT" to="/page3">отзывы</Link>
      </button>


    </div>
  );
};
export default SiteBarMeny;
