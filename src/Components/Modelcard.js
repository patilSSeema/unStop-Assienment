import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Modelcard.css";
import { LuPlus } from "react-icons/lu";

function Modelcard() {
  const [show, setShow] = useState(false);
  const [timeInput, setTimeInput] = useState("");
  const [assessmentData, setAssessmentData] = useState([]);
  const [assessmentName, setAssessmentName] = useState(""); // Added state for assessment name
  const [purpose, setPurpose] = useState(""); // Added state for purpose
  const [description, setDescription] = useState(""); // Added state for description

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTimeInputChange = (event) => {
    setTimeInput(event.target.value);
  };

  const handleSaveChanges = () => {
    // Validate input before saving
    if (
      assessmentName.trim() === "" ||
      purpose.trim() === "" ||
      description.trim() === "" ||
      timeInput.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Save the assessment data to the array
    const newAssessment = {
      name: assessmentName,
      purpose: purpose,
      description: description,
      duration: timeInput,
    };

    setAssessmentData([...assessmentData, newAssessment]);
    handleClose();
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <Button variant="light" onClick={handleShow} classname="btn">
        <LuPlus size={20} color="blue" />
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <h6>Create new assessment</h6>
        </Modal.Header>
        <Modal.Body>
          <div className="mainDivModel">
            <label className="label-name">Name of assessment</label>
            <p>
              <input
                type="text"
                value={assessmentName}
                onChange={(e) => setAssessmentName(e.target.value)}
                placeholder="Type Here "
                className="inputSty"
              />
            </p>
            <label className="label-name">Purpose of the test is</label>
            <p>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                id="select-test"
                className="inputSty"
              >
                <option value="">Select</option>
                <option value="">Practice</option>
              </select>
            </p>
            <label className="label-name">Description</label>
            <p>
              <select
                value={description}
                className="inputSty"
                onChange={(e) => setDescription(e.target.value)}
              >
                <option value="Select">Select</option>
                <option value="Select">Want to practice</option>
              </select>
            </p>
            <div className="chip-div">
              <Stack direction="row" spacing={1}>
                <Chip
                  className="inner-chip"
                  label="UI/UX and Design"
                  onDelete={handleDelete}
                />
                <Chip
                  className="inner-chip"
                  label="No of Quetion"
                  onDelete={handleDelete}
                />
              </Stack>
            </div>
            <p>
              <input
                className="skill-input inputSty"
                type="text"
                placeholder="Type here"
              />
            </p>
            <label className="label-name">Duration of assessment</label>
            <p>
              <input
                type="text"
                value={timeInput}
                onChange={handleTimeInputChange}
                placeholder="hh:mm:ss"
                className="inputSty"
              />
            </p>
            <button
              type="submit"
              className="save-button"
              onClick={handleSaveChanges}
            >
              Next
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modelcard;
