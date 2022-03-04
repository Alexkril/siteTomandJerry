import React from "react";
import SiteBarMeny from "./SiteBarMeny";
import Cosial from "../../../Cosial/Cosial";
import clases from './SiteBar.module.scss'


const SiteBar = () => {
  return (
    <div className={clases.SiteBar}>
      <SiteBarMeny />
      <Cosial />
    </div>

  );
};
export default SiteBar;
