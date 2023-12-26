import React from "react";
import { MdOutlineDashboard, MdOutlineNoteAlt } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import  "./SideBar.css"

const SideBar = () => {
  return (
    <div className="sideBarStyS">
      <div>
        <p>
          <MdOutlineDashboard size={25} />
        </p>
        <p>Dashboard</p>
      </div>

      <div>
        <p>
          <MdOutlineNoteAlt size={25} />
        </p>
        <p>Assessment</p>
      </div>
      <div>
        <p>
          <SiBookstack size={25} />
        </p>
        <p>My Library</p>
      </div>
      <p className="line"></p>
      <center>
        <div>
          <button className="adminBtn">Admin</button>
        </div>
        <div>
          <p>
            <SiBookstack size={20} />
          </p>
          <p>
            Round
            <p>Status</p>
          </p>
        </div>
      </center>
    </div>
  );
};

export default SideBar;
