import React from "react";
// import "./Form.css";

function Form(name, setName, headingText, setHeading, projDesc, setDesc) {


  function handleChangename(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleChangedesc(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      {/* <h1>Hello {headingText}</h1> */}
      <form onSubmit={handleClick}>
        <h1>Create Project</h1>
        <p>Please fill in this form to create your project.</p>
        <hr />

        <label>
          <b>Project Name: </b>
        </label>
        <input
          onChange={handleChangename}
          type="text"
          placeholder="Enter project title/name"
          name="projname"
          id="projname"
          required
        />
        <br />
        <br />

        <label>
          <b>Project description: </b>
        </label>
        <input
          onChange={handleChangedesc}
          type="text"
          placeholder="Type your project description in not more than 50 words"
          name="projdesc"
          id="projdesc"
          required
        />

        <br />
        <br />
        <button type="submit" className="createbtn">
          Create
        </button>
      </form>
    </div>
  );
}

export default Form;
