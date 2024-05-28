import React, { useReducer, useState } from "react";

// Khởi tạo trạng thái ban đầu
const initialState = ["Rua bat", "Nau com", "Hoc bai"];

// Định nghĩa các hành động
const DELETE_ACTION = "delete";
const ADD_ACTION = "add";

// Xây dựng reducer để xử lý các hành động
const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_ACTION:
      return state.filter((_, index) => index !== action.payload);
    case ADD_ACTION:
      return [...state, action.payload];
    default:
      throw new Error("Unknown action type");
  }
};

const TodoAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.trim()) {
      dispatch({ type: ADD_ACTION, payload: value });
      setValue("");
    }
  };

  const handleDelete = (index) => {
    dispatch({ type: DELETE_ACTION, payload: index });
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
        {state.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAppReducer;
