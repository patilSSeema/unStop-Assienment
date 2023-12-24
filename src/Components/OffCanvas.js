import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa6";

import { MdOutlineDashboard, MdOutlineNoteAlt } from "react-icons/md";

import { SiBookstack } from "react-icons/si";

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="light" onClick={handleShow} className="me-2">
        <FaBars /> {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sideBarSty">
            <div>
              <span>
                <MdOutlineDashboard size={25} />
              </span>
              <span>Dashboard</span>
            </div>

            <div>
              <span>
                <MdOutlineNoteAlt size={25} />
              </span>
              <span>Assessment</span>
            </div>
            <div>
              <span>
                <SiBookstack size={25} />
              </span>
              <span>My Library</span>
            </div>
            {/* <div>
        <button>Admin</button>
      </div>
      <div>
        <span>
          <SiBookstack size={30} />
        </span>
        <span>My Library</span>
      </div> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffCanvas;
