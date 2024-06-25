import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { update } from "firebase/database";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import FirebaseAuth from "./FirebaseAuth";
import FirebaseCRUD from "./FirebaseCRUD";

const FirebaseApp = () => {
  const [open, setOpen] = useState(false);
  const [open_1, setOpen_1] = useState(false);
  return (
    <div className="row">
      <div className="firebase-crud col-6">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          FIREBASE CRUD
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <FirebaseCRUD />
          </div>
        </Collapse>
      </div>
      <div className="firebase-auth col-6">
        <Button
          onClick={() => setOpen_1(!open_1)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          FIREBASE AUTH
        </Button>
        <Collapse in={open_1}>
          <div id="example-collapse-text">
            <FirebaseAuth />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default FirebaseApp;
