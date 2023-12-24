import React from "react";
import OffCanvas from "./OffCanvas";
import { MdOutlineLaptopMac } from "react-icons/md";

const MobileHeader = () => {
  return (
    <div className="mobileHMainSty">
      <div className="mobileHSecSty">
        <div>
          <OffCanvas />
        </div>
        <div style={{ marginTop: "10px" }}>
          <h6>Assessment</h6>
        </div>
      </div>
      <div>
        <MdOutlineLaptopMac size={20} />
      </div>
    </div>
  );
};

export default MobileHeader;
