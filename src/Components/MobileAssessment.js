import React from "react";
import "./MobileAssessment.css";
import { PiEqualsFill } from "react-icons/pi";
import { IoLink } from "react-icons/io5";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";

const MobileAssessment = () => {
  return (
    <>
      <div className="mobileMianDiv">
        <div className="MRow">
          <div>
            <p className="PheadingsM">Total Assessment</p>
            <p className="outerDivM">
              <span>
                <PiEqualsFill
                  size={30}
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
          <div className="MRowSecCol">
            <p className="PheadingsM">Total Purpose</p>
            <p className="outerDivM">
              <span>
                <IoLink
                  color="blue"
                  size={30}
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
        <div>
          <div className="MRowTwo">
            <p className="PheadingsM">Candidates</p>
            <p className="innerDivM">
              <span>
                <MdOutlinePeopleOutline
                  size={30}
                  color="#6548EE"
                  className="icon"
                  style={{ backgroundColor: "#EBE8FD" }}
                />
              </span>
              <span className="marginLeft">
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
        <div>
          <div className="MRowTwo">
            <p className="PheadingsM">Candidates Source</p>
            <p className="innerDivM">
              <span>
                <BsGlobe2
                  size={30}
                  color="#EE6A97"
                  className="icon"
                  style={{ backgroundColor: "#FCE8EF" }}
                />
              </span>
              <span className="marginLeft">
                <b>
                  11,000 <span>+89</span>
                </b>
                <p className="innerP">E-mail</p>
              </span>
              <span className="marginLeft">
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
        </div>
      </div>
    </>
  );
};

export default MobileAssessment;
