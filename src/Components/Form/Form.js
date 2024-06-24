import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({
    email: "",
    name: "",
  });
  const hanldeInput = (e) => {
    setValue({
      ...value,
      [e.target.email]: e.target.value,
    });
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  console.log(value);
  return (
    <div>
      <hr />
      <h1>Form</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={hanldeInput}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="exampleInputPassword1"
            onChange={hanldeInput}
          />
        </div>
      </form>
      <p>name: {value.name}</p>
      <p>email: {value.email}</p>
    </div>
  );
};

export default Form;
