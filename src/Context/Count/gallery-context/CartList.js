import React from "react";
import { useGallery } from "./Galley-context";
import { Button, Card } from "react-bootstrap";

const CartList = () => {
  const { cart, removeFromCart } = useGallery();

  return (
    <div className="row " style={{ gap: "10px" }}>
      {cart &&
        cart.length > 0 &&
        cart.map((item, index) => (
          <Card style={{ width: "18rem" }} key={index + 1} className="col-3 ">
            <Card.Img variant="top" src={item.url} />
            <Card.Body>
              <Card.Title>Card {Math.round(Math.random(0) * 19)}</Card.Title>
              <Card.Text>Cart text {index + 1}</Card.Text>

              <div className="btn ">
                <Button
                  variant="warning"
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default CartList;
