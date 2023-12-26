import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { IoSearch } from "react-icons/io5";
import { RiFilterFill } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";

import "./Home.css";
import Header from "./Header";
import SideBar from "./SideBar";
import MobileHeader from "./MobileHeader";
import NewCard from "./NewCard";
import MobileAssessment from "./MobileAssessment";
import StaticCard from "./StaticCard";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isVisible, setIsVisible] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // assessent overview in Mobile view

  const AssessmentOverview = () => {
    return (
      <div className="myAssessm">
        <div>My Assessment</div>
        <div className="InnerMyassessm">
          <div>
            <IoSearch size={20} />
          </div>
          <div>
            <RiFilterFill size={20} />
          </div>
          <div>
            <button onClick={toggleVisibility} className="BarChartBtn">
              <MdOutlineBarChart size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const MobileSubHeader = () => {
    return (
      <>
        <Navbar>
          <Container>
            <Nav
              variant="underline"
              className="me-auto"
              defaultActiveKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="/home" style={{ color: "#1877F2" }}>
                  My Assessment
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: "black" }}>
                  Unstop Assessment
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  };

  return (
    <>
      <div>
        <div className="homeMainDiv">
          <div style={{ backgroundColor: "white" }}>
            {isMobile ? <MobileHeader /> : <SideBar />}
          </div>
          <div
            className={` ${isMobile ? "seondDivMobile" : "seondDivHome"}`}
            style={{ backgroundColor: "white" }}
          >
            {isMobile ? <MobileSubHeader /> : <Header isMobile={isMobile} />}
            <div
              className={`slide-container ${
                isVisible && isMobile ? "visible" : "hidden"
              }`}
            >
              {isMobile ? <MobileAssessment /> : ""}
            </div>
            {isMobile ? <AssessmentOverview /> : ""}
            <div>
              <h5 className="MyAssessHead">My Assessments</h5>
            </div>
            <div className="cardStyle">
              <div>
                <NewCard />
              </div>
              <div>
                <StaticCard />
              </div>
              <div>
                <StaticCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
