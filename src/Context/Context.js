import React from "react";
import Display from "./Count/Display";
import PhotoList from "./Count/gallery-context/PhotoList";
import { GalleryProvider } from "./Count/gallery-context/Galley-context";
import CartList from "./Count/gallery-context/CartList";
import InforCart from "./Count/gallery-context/InforCart";
const Context = () => {
  return (
    <>
      <GalleryProvider>
        <hr />
        <h1>uesContext</h1>
        <Display />

        <h3 className="">GalleryProvider</h3>
        <InforCart />
        <PhotoList />
        <CartList />
      </GalleryProvider>
    </>
  );
};

export default Context;
