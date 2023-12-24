import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { LuPlus } from "react-icons/lu";
import "./Home.css";
import Modelcard from "./Modelcard";

const NewCard = () => {
  return (
    <div>
      <Card className="card-container" style={{ width: "18rem" }}>
        <Card.Body className="card">
          <Modelcard>
            <button className="btn">
              <LuPlus size={20} />
            </button>
          </Modelcard>
          <Card.Subtitle className="mb-2 text-muted title">
            New Assessment
          </Card.Subtitle>
          <Card.Text>
            From here you can add quuestions of multiple type like
            MCQs,subjective(text or paragraph)!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewCard;
