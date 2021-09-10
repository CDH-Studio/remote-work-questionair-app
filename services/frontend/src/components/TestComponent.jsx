// import logo from "./logo.svg";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function TestComponent({ onChange }) {
  const [userInfo, setUserInfo] = useState({ step: 1 });
  const [validated, setValidated] = useState(false);

  const onNameEmailSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      //   setUserInfo({
      //     firstName: event.target.elements.formFirstName.value,
      //     lastName: event.target.elements.formLastName.value,
      //     email: event.target.elements.formEmail.value,
      //     step: 2,
      //   });
      onChange({ message: "yo" });
      setValidated(false);
    }
    // setValidated(true);
  };

  return (
    <Button variant="primary" onClick={onNameEmailSubmit}>
      Primary
    </Button>
  );
}

export default TestComponent;
