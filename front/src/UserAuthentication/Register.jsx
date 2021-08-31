import React from "react";
import Form from "./Form";
import Button from "./Button";

function Register(props) {
  return (
    <div>
      <Form name="Register" />
      <Button
        handleClick={props.alreadyHaveAccount}
        name="Already Have an account"
      />
    </div>
  );
}

export default Register;
