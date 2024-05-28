import React from "react";

const Stateful = () => {
  return (
    <div>
      <h3>
        <i>Stateful Components Stateful components </i>
      </h3>
      (còn gọi là class components hoặc stateful functional components với
      hooks) là các thành phần có thể quản lý trạng thái nội bộ. Chúng sử dụng
      state để lưu trữ và cập nhật dữ liệu, và có thể thay đổi giao diện dựa
      trên trạng thái đó. Đặc điểm của Stateful Components: Quản lý trạng thái
      nội bộ: Sử dụng state để lưu trữ dữ liệu và cập nhật giao diện khi trạng
      thái thay đổi. Có thể phức tạp hơn: Vì phải quản lý trạng thái và logic
      cập nhật trạng thái. Có thể sử dụng lifecycle methods (nếu là class
      components): Các phương thức này cho phép quản lý vòng đời của thành phần.
    </div>
  );
};

export default Stateful;
