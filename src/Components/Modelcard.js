import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Modelcard.css";

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
      <Button variant="primary" onClick={handleShow}></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new assessment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <label className="label-name">Name of assessment</label>
            <p>
              <input
                type="text"
                value={assessmentName}
                onChange={(e) => setAssessmentName(e.target.value)}
                placeholder="Type Here"
              />
            </p>

            <label className="label-name">Purpose of the test is</label>

            <p>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                id="select-test"
              >
                <option value="">Select</option>
                <option value="">Practice</option>
                {/* Add other options */}
              </select>
            </p>

            <label className="label-name">Description</label>

            <p>
              <select
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              >
                <option value="Select">Select</option>
                <option value="Select">Want to practice</option>
                {/* Add other options */}
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
                {/* <br/>
              <Chip className="inner-chip" label="Web Development" onDelete={handleDelete} /> */}
                {/* <Chip className="inner-chip"
                label="Reactjs"
                variant="outlined"
                onDelete={handleDelete}
              /> */}
              </Stack>
            </div>
            <p>
              <input
                className="skill-input"
                type="text"
                placeholder="Type here"
              ></input>
            </p>
            <label className="label-name">Duration of assessment</label>
            <p>
              <input
                type="text"
                value={timeInput}
                onChange={handleTimeInputChange}
                placeholder="hh:mm:ss"
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
        {/* <Modal.Footer className="footer">
          <button type="save-button"  onClick={handleSaveChanges}>
            Save
          </button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Modelcard;
