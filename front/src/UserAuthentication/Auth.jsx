import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
// import cors from "cors";

function Auth(props) {
  const [userIsRegistered, setUserIsRegistered] = useState(false);

  function alreadyHaveAccount() {
    setUserIsRegistered(true);
  }

  function createAccount() {
    setUserIsRegistered(false);
  }

  return (
    <div className="container">
      {userIsRegistered === true ? (
        <Login createAccount={createAccount} setLog={props.setLog} />
      ) : (
        <Register alreadyHaveAccount={alreadyHaveAccount} />
      )}
    </div>
  );
}

export default Auth;
