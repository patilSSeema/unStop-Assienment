import Card from "react-bootstrap/Card";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import "./StaticCard.css";
import { GrFormAttachment } from "react-icons/gr";

const StaticCard = () => {
  return (
    <Card className="card-container">
      <Card.Body className="card1">
        <div className="mainStaticcard">
          <div className="firstDiv">
            <div>
              <IoBriefcaseOutline
                size={40}
                color="#6548EE"
                className="icon"
                style={{ backgroundColor: "#EBE8FD" }}
              />
            </div>
            <div>
              <HiOutlineDotsVertical size={20} />
            </div>
          </div>
          <div className="secDiv">
            <div>
              <span className="inner-span">Math Assessment</span>
              <p>
                <span className="secDivSpan">Job</span>
                <span>
                  <MdOutlineWatchLater size={15} />
                </span>
                <span style={{ color: "gray" }}> 20 Apr 2023</span>
              </p>
            </div>
          </div>
          <p className="outline"></p>
          <div className="bottomDiv">
            <div className="bottomInner">
              <div>
                <span className="main-para">00</span>
                <br />
                <span className="para">Duration</span>
              </div>
              <div>
                <span className="main-para">00</span>
                <br />
                <span className="para">Questions</span>
              </div>
            </div>
            <div className="bottenSecDiv">
              <span>
                <button className="share-btn">
                  <GrFormAttachment size={20} />
                  Share
                </button>
              </span>
              <span>
                <img
                  src="https://ik.imagekit.io/djp55lfiz/letter%20image.png?updatedAt=1703394100851"
                  alt="profile-img"
                />
              </span>
              <span>+ 324</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StaticCard;
