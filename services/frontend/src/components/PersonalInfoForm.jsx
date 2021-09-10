// import logo from "./logo.svg";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function PersonalInfoForm({ onChange }) {
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
      onChange({
        firstName: event.target.elements.formFirstName.value,
        lastName: event.target.elements.formLastName.value,
        email: event.target.elements.formEmail.value,
        nextStep: 2,
      });
      setIsDone(true);
      setValidated(false);
    }
  };

  return (
    <Card className="shadow p-4 my-3">
      <Card.Body>
        <Card.Title>Personal Information</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Before we begin we need some information to identify you.
        </Card.Subtitle>
        <Form noValidate validated={validated} onSubmit={onNameEmailSubmit}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="John"
              readOnly={isDone}
            />
            <Form.Control.Feedback type="invalid">
              required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Doe"
              readOnly={isDone}
            />
            <Form.Control.Feedback type="invalid">
              required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>ISED Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="john.doe@ised.gc.ca"
              readOnly={isDone}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
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

export default PersonalInfoForm;
