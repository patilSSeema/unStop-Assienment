import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa6";

import { MdOutlineDashboard, MdOutlineNoteAlt } from "react-icons/md";

import { SiBookstack } from "react-icons/si";
import "./OffCanvas.css";

const OffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const offcanvasStyle = {
    width: "280px", // Set the desired width
  };
  return (
    <div>
      <Button variant="light" onClick={handleShow} className="me-2">
        <FaBars /> {name}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        style={offcanvasStyle}
      >
        <Offcanvas.Header closeButton>Menu</Offcanvas.Header>
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
            <p className="lineO"></p>
            <div className="offCanBottomDiv">
              <div>
                <span>
                  <SiBookstack size={20} />
                </span>
                <span>Round Status</span>
              </div>
              <div>
                <button className="adminBtn">Admin</button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffCanvas;
