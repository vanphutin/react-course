import React from "react";

const Stateless = () => {
  return (
    <div>
      <h3>
        <i>Stateless Components Stateless components </i>
      </h3>
      (còn gọi là functional components) là các thành phần không quản lý trạng
      thái nội bộ. Chúng chỉ nhận dữ liệu qua props và trả về JSX để render giao
      diện. Những thành phần này rất đơn giản và dễ hiểu vì chúng không chứa
      logic phức tạp liên quan đến trạng thái. Đặc điểm của Stateless
      Components: Không có trạng thái nội bộ: Chúng không sử dụng state để lưu
      trữ hoặc quản lý dữ liệu. Đơn giản và dễ kiểm thử: Vì không có trạng thái
      nội bộ, chúng dễ dàng kiểm thử và dự đoán hành vi. Thường được định nghĩa
      bằng hàm: Sử dụng hàm để định nghĩa thay vì lớp (class).
    </div>
  );
};

export default Stateless;
