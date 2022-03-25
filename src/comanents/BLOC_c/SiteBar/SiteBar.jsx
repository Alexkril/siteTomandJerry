import React from "react";
import SiteBarMeny from "./SiteBarMeny";
import Cosial from "../../../Cosial/Cosial";
import clases from './SiteBar.module.scss'
import SiteBarMeny2 from "./SiteBarMeny2";


const SiteBar = () => {
  return (
    <div className={clases.SiteBar}>
      {/* <SiteBarMeny/> */}

      <SiteBarMeny2/>
      <Cosial />
    </div>

  );
};
export default SiteBar;
