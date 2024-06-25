import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase-config";

const FirebaseAuth = () => {
  const auth = getAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
      addDoc(userRef, {
        password: values.password,
        email: values.email,
      });
    });
    const userRef = collection(db, "user");
    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [auth]);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            onChange={handleInputChange}
            value={values.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputPassword5">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            aria-describedby="passwordHelpBlock"
            onChange={handleInputChange}
            value={values.password}
          />
        </Form.Group>
        <Button
          className="btn btn-primary"
          onClick={handleSignIn}
          disabled={loading}
        >
          Sign In
        </Button>
        <Button
          className="btn btn-info"
          onClick={handleSignUp}
          disabled={loading}
        >
          Sign Up
        </Button>

        <Button className="btn btn-secondary" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Form>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div className="info">
        <span>Email: {userInfo?.email || "No user signed in"}</span>
      </div>
    </div>
  );
};

export default FirebaseAuth;
