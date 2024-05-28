import React, { useState } from "react";

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    "Rua bat",
    "Nau com",
    "Hoc bai",
    "di choi",
  ]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    setTodos([...todos, value]);
    setValue("");
  };
  const handleDeleteItem = (index) => {
    const newTodo = todos.filter((element, i) => {
      console.log("Element:", element, "Index:", i);
      return i !== index;
    });
    setTodos(newTodo);
  };
  return (
    <div>
      <h3>Todo</h3>
      <input
        type="text"
        placeholder="Enter todo ..."
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todos.map((items, index) => (
          <li key={index}>
            {items}{" "}
            <button onClick={() => handleDeleteItem(index)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
