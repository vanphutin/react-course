import React, { useEffect, useMemo, useRef, useState } from "react";

const AddProductWithUseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  const nameRef = useRef();
  const handleAdd = () => {
    if (name === "" || price === "") return;
    setProduct([
      ...product,
      {
        name,
        price: Number(price),
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  // Tính tổng giá trị sản phẩm
  const totalProd = useMemo(() => {
    const result = product.reduce((result, prod) => {
      console.log("Giá trị này tính toán lại");
      return result + prod.price;
    }, 0);
    return result;
  }, [product]);

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <input
            ref={nameRef}
            type="text"
            value={name}
            placeholder="product name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={price}
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <button onClick={handleAdd}>add</button>
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
      </div>
    </div>
  );
};

export default AddProductWithUseMemo;
