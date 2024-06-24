import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  const [message, setMessage] = useState(""); // Thay đổi tên biến setMessgae thành setMessage
  const handleAdd = () => {
    if (name === "" || price === "") return;
    setProduct([
      ...product,
      {
        name,
        price: Number(price),
      },
    ]);
  };
  // Tính tổng giá trị sản phẩm
  const totalProd = product.reduce((result, prod) => {
    console.log("Tinh toan lai ...");
    return result + prod.price;
  }, 0);

  return (
    <div>
      <input
        type="text"
        placeholder="product name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={() => handleAdd()}>add</button>
      <br />
      Total : {totalProd}
      <ul>
        {product.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProduct;
