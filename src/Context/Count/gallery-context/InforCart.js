import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useGallery } from "./Galley-context";

const InforCart = () => {
  const { photos, cart } = useGallery();

  const countHeart =
    photos && photos.length > 0
      ? photos.filter((items) => items.isFavorite === true).length
      : 0;
  return (
    <div className="d-flex   text-red row ">
      <div className="count-cart col-3 ">
        <FaShoppingCart /> count : {cart.length}
      </div>
      <div className="count-heart col-3">
        <FaHeart /> count : {countHeart}
      </div>
    </div>
  );
};

export default InforCart;
