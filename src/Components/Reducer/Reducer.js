import React from "react";
import Count from "./Count/Count";
import TodoApp from "./TodoApp/TodoApp";
import TodoAppReducer from "./TodoApp/TodoAppReducer";

const Reducer = () => {
  return (
    <div>
      <h1>Reducer</h1>
      <p>
        <code>const [state, dispatch] = useReducer(reducer, initialState)</code>
      </p>
      là một hook dùng để quản lý state phức tạp hơn so với useState. Nó thường
      được sử dụng khi state của bạn có nhiều logic cập nhật hoặc khi state phụ
      thuộc vào các giá trị trước đó. useReducer cung cấp một cách tiếp cận
      tương tự như reducer trong Redux. Cách sử dụng useReducer useReducer nhận
      vào hai đối số chính: Một hàm reducer (reducer function) xác định cách
      state được cập nhật. Giá trị khởi tạo của state. Nó trả về một mảng với
      hai phần tử: State hiện tại. Hàm dispatch để gửi action nhằm cập nhật
      state.
      <Count />
      {/* <TodoApp /> */}
      <TodoAppReducer />
      <hr />
    </div>
  );
};

export default Reducer;
