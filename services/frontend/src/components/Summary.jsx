// import logo from "./logo.svg";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function Summary({ onChange }) {
  const [isDone, setIsDone] = useState(false);
  const [validated, setValidated] = useState(false);

  const onNameEmailSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      const formExclusiveOnSiteBool =
        event.target.elements.formExclusiveOnSiteBool.value;
      onChange({
        ExclusiveOnSiteBool: formExclusiveOnSiteBool,
        nextStep: formExclusiveOnSiteBool === true ? 99 : 3,
      });
      setIsDone(true);
      setValidated(false);
    }
  };

  return (
    <Card className="shadow p-4 my-3">
      <Card.Body>
        <Card.Title>Summary</Card.Title>
        <Card.Text>We have calculated that you are hybrid</Card.Text>
        <Button>Submit</Button>
      </Card.Body>
    </Card>
  );
}

export default Summary;
