import React from "react";
import Form from "./Form";
import Button from "./Button";

function Login(props) {
  return (
    <div>
      <Form name="Login" setLog={props.setLog}/>
      <Button handleClick={props.createAccount} name="Don't have account" />
    </div>
  );
}

export default Login;