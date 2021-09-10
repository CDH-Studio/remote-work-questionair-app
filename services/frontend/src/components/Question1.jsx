// import logo from "./logo.svg";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function Question1({ onChange }) {
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
        nextStep: formExclusiveOnSiteBool === "true" ? 99 : 3,
      });
      setIsDone(true);
      setValidated(false);
    }
  };

  return (
    <Card className="shadow p-4 my-3">
      <Card.Body>
        <Card.Title>Question 1</Card.Title>
        <Form noValidate validated={validated} onSubmit={onNameEmailSubmit}>
          <Form.Group className="mb-3" controlId="formExclusiveOnSiteBool">
            <Form.Label>
              Can the work only be performed exclusively from an on-site
              location?
            </Form.Label>
            <Form.Select required disabled={isDone}>
              <option value="">Choose</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              required
            </Form.Control.Feedback>
          </Form.Group>

          {!isDone && (
            <Button variant="primary" type="submit">
              Next
            </Button>
          )}
          {/* <Button variant="primary" type="submit">
            Next
          </Button> */}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Question1;
