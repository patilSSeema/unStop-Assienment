import React from "react";
import "./Style.css";
import { PiEqualsFill } from "react-icons/pi";
import { IoLink } from "react-icons/io5";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";

const MyAssessment = () => {
  return (
    <>
      <p className="assessHead">Assessment Overview</p>
      <div className="mainDiv">
        <div className="FirstDiv">
          <div>
            <p className="Pheadings">Total Assessment</p>
            <p className="outerDiv">
              <span>
                <PiEqualsFill
                  size={35}
                  color="#6548EE"
                  className="icon"
                  style={{ backgroundColor: "#EBE8FD" }}
                />
              </span>
              <span>
                <b>34</b>
              </span>
            </p>
          </div>
          <div>
            <p className="Pheadings">Candidates</p>
            <p className="innerDiv">
              <span>
                <MdOutlinePeopleOutline
                  size={35}
                  color="#6548EE"
                  className="icon"
                  style={{ backgroundColor: "#EBE8FD" }}
                />
              </span>
              <span>
                <b>
                  11,145 <span>+89</span>
                </b>
                <p className="innerP">Total Candidate</p>
              </span>
              <span>
                <b>
                  1,14 <span>+89</span>
                </b>
                <p className="innerP">Who Attempted</p>
              </span>
            </p>
          </div>
        </div>
        <div className="SecDiv">
          <div>
            <p className="Pheadings">Candidates Source</p>
            <p className="innerDiv">
              <span>
                <BsGlobe2
                  size={35}
                  color="#EE6A97"
                  className="icon"
                  style={{ backgroundColor: "#FCE8EF" }}
                />
              </span>
              <span>
                <b>
                  11,000 <span>+89</span>
                </b>
                <p className="innerP">E-mail</p>
              </span>
              <span>
                <b>
                  11,000 <span>+89</span>
                </b>
                <p className="innerP">Social Share</p>
              </span>
              <span>
                <b>
                  11,000 <span>+89</span>
                </b>
                <p className="innerP">Unique Link</p>
              </span>
            </p>
          </div>
          <div>
            <p className="Pheadings">Total Purpose</p>
            <p className="outerDiv">
              <span>
                <IoLink
                  color="blue"
                  size={35}
                  className="icon"
                  style={{ backgroundColor: "#E5F1FC" }}
                />
              </span>
              <span>
                <b>11</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAssessment;
