import React from "react";
import imgName from "../../../assets/img/img.png";
import imgName2 from "../../../assets/img/img2.png";
import clases from "./SiteBarMenu.module.css";

const SiteBarMeny = () => {
  return (
    <div>
      <a className="SiteBarMeny" href="#">
        <div className="SiteBarIcons">
          <img src={imgName} className={clases.imgIcon} />
        </div>
        <div className="SiteBarMenyT">груминг</div>
      </a>

      <button className="SiteBarMeny" href="#">
        <div className="SiteBarIcons">
          <img src={imgName2} className={clases.imgIcon} />
        </div>
        <div className="SiteBarMenyT">прайс</div>
      </button>

      <button className="SiteBarMeny" href="#">
        <div className="SiteBarIcons">
          <img
            src="https://image.flaticon.com/icons/png/512/964/964016.png"
            alt=""
            width="30"
          />
        </div>
        <div className="SiteBarMenyT">галерея</div>
      </button>

      <button className="SiteBarMeny" href="#">
        <div className="SiteBarIcons">
          <img
            src="https://w7.pngwing.com/pngs/871/595/png-transparent-customer-review-information-others-hand-service-logo.png"
            alt=""
            width="30"
          />
        </div>
        <div className="SiteBarMenyT">отзывы</div>
      </button>
    </div>
  );
};
export default SiteBarMeny;
