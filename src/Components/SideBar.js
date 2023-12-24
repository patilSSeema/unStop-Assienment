import React from "react";
import { MdOutlineDashboard, MdOutlineNoteAlt } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

const SideBar = () => {
  return (
    <div className="sideBarSty">
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
      {/* <div>
        <button>Admin</button>
      </div>
      <div>
        <p>
          <SiBookstack size={30} />
        </p>
        <p>My Library</p>
      </div> */}
    </div>
  );
};

export default SideBar;
