// import logo from "./logo.svg";
import { useState } from "react";
import {
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function Question1({ onChange }) {
  const [isDone, setIsDone] = useState(false);
  const [dropdownSelection, setDropdownSelection] = useState("false");
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
        ExclusiveOnSiteBool:
          event.target.elements.formOnSiteEquipmentInfoBool.value,
        nextStep: 4,
      });
      setIsDone(true);
      setValidated(false);
    }
  };

  return (
    <Card className="shadow p-4 my-3">
      <Card.Body>
        <Card.Title>Question 2</Card.Title>
        <Form noValidate validated={validated} onSubmit={onNameEmailSubmit}>
          <Form.Group className="mb-3" controlId="formOnSiteEquipmentInfoBool">
            <Form.Label>
              Is equipment/information, only available onsite required to be
              used or accessed?
            </Form.Label>
            <Form.Select
              required
              readOnly={isDone}
              onChange={(e) => setDropdownSelection(e.target.value)}
            >
              <option value="">Choose</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              required
            </Form.Control.Feedback>
          </Form.Group>

          {dropdownSelection === "true" && (
            <Form.Group className={"w-50 mb-3"}>
              <fieldset>
                <Form.Label as="legend">
                  How much access/time do you need?
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Label as="legend" column sm={2}>
                      Amount
                    </Form.Label>
                    <Form.Control type="number" placeholder="0" />
                  </Col>
                  <Col>
                    <Form.Label as="legend" column sm={2}>
                      Unit
                    </Form.Label>
                    <Form.Select>
                      <option value="">hours/day</option>
                      <option value="true">days/week</option>
                      <option value="false">days/month</option>
                      <option value="true">days/year</option>
                    </Form.Select>
                  </Col>
                </Row>
              </fieldset>
            </Form.Group>
          )}
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
