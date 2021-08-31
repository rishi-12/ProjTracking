import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import {Link} from 'react-router-dom';


function Form(props) {
  // const [email, setEmail] = useState("");
  // useEffect(() => {
  //   console.log(email);
  // }, [email]);
  function handleLogin(event) {
    // console.log(users);
  
    event.preventDefault();
    console.log(event.target.email.value);
  
    const user1 = {
      email: event.target.email.value,
      password: event.target.pwd.value
    };
    console.log(user1);
  
    axios.post("http://localhost:8080/api/user/login", user1).then((response) => {
      const header = { "auth-token": response.data };
      console.log(header);
      props.setLog(true);
      // axios
      //   .get("http://localhost:8080/api/posts", { headers: header })
      //   .then((resp) => {
      //     console.log(resp);
      //   });
    });
  
  }
  
  function handleRegister(event) {}
  return (
    <form
      className="form"
      onSubmit={props.name === "Login" ? handleLogin : handleRegister}
    >
      <input name="email" type="text" placeholder="Username" />
      <input name="pwd" type="password" placeholder="Password" />
      {props.name === "Register" && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <Button name={props.name} type="submit" />
    </form>
  );
}

export default Form;
