import logo from "./logo.svg";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import PersonalInfoForm from "./components/PersonalInfoForm";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Summary from "./components/Summary";

function App() {
  const [userInfo, setUserInfo] = useState({ nextStep: 1 });
  // const [validated, setValidated] = useState(false);

  // const onNameEmailSubmitz = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     setValidated(true);
  //   } else {
  //     event.preventDefault();
  //     setUserInfo({
  //       firstName: event.target.elements.formFirstName.value,
  //       lastName: event.target.elements.formLastName.value,
  //       email: event.target.elements.formEmail.value,
  //       step: 1,
  //     });
  //     setValidated(false);
  //   }
  //   // setValidated(true);
  // };

  const onFormSubmit = (data) => {
    setUserInfo({ ...userInfo, ...data });
    console.log({ ...userInfo, ...data });
  };

  // const onExclusiveRemoteSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     setValidated(true);
  //   } else {
  //     setUserInfo({
  //       ExclusiveOnSiteBool:
  //         event.target.elements.formExclusiveOnSiteBool.value,
  //       step: 3,
  //     });
  //     setValidated(false);
  //   }
  // };

  // const onTestChange = (data) => {
  //   console.log(data);
  // };

  // const myChangeHandler = (event) => {
  //   let nam = event.target.name;
  //   let val = event.target.value;
  //   setUserInfo({ [nam]: val });
  //   console.log("userInfo", userInfo);
  // };

  return (
    <div className="App p-5">
      <h1 className="mb-4">Remote Work Request Form</h1>

      {userInfo.nextStep > 0 && <PersonalInfoForm onChange={onFormSubmit} />}
      {userInfo.nextStep >= 2 && <Question1 onChange={onFormSubmit} />}
      {userInfo.nextStep >= 3 && userInfo.nextStep < 99 && (
        <Question2 onChange={onFormSubmit} />
      )}
      {userInfo.nextStep === 99 && <Summary onChange={onFormSubmit} />}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="primary">Primary</Button>
      </header> */}
    </div>
  );
}

export default App;
