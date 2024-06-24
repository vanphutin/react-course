import React from "react";
import { useGallery } from "../gallery-context/Galley-context";
import PropTypes from "prop-types";
import { CiHeart } from "react-icons/ci";
import { FaDove, FaHeart } from "react-icons/fa";

const PhotoList = () => {
  const { photos, cart } = useGallery();
  // console.log(photos); // undefide
  return (
    <div>
      {" "}
      {photos &&
        photos.length > 0 &&
        photos.map((item, index) => <PhotoItem info={item}></PhotoItem>)}
    </div>
  );
};

const PhotoItem = ({ info: { url, isFavorite, id } }) => {
  const { toggleFavorite, addToCart } = useGallery();
  const item = { url, isFavorite, id };

  return (
    <div className="w-25  position-relative m-5">
      <img src={url} alt="" className=" w-100 " />
      <span
        onClick={() => toggleFavorite(id)}
        className="position-absolute  top-0 end-0 fs-1 z-3 font-20 cursor-pointe"
        style={{ color: isFavorite ? "red" : "white" }}
      >
        <FaHeart />
      </span>
      <button
        className="btn btn-info position-absolute bottom-0 start-50 translate-middle-x"
        onClick={() => addToCart(item)}
      >
        Add to cart
      </button>
    </div>
  );
};

PhotoItem.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export default PhotoList;
