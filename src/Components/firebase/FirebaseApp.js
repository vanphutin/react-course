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

const FirebaseApp = () => {
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState("");
  const [open, setOpen] = useState(false);
  const [open_1, setOpen_1] = useState(false);

  useEffect(() => {
    //1. get
    // getDocs(colRef).then((snapshot) => {
    // let posts = [];
    //   snapshot.forEach((doc) => {
    //     posts.push({
    //       id: doc.id,
    //       ...doc.data(),
    //     });
    //   });
    //   setPost(posts);
    // });

    //2. get document in realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];

      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPost(posts);
    });
  }, []);
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
    setAuthor("");
    setTitle("");
  };
  const handleUpdatePost = (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);

    updateDoc(colRefUpdate, {
      title,
      author,
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
    setAuthor("");
    setTitle("");
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("success");
  };
  console.log(post);
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
            <div className="form-add-posts">
              <h2>ADD POST</h2>
              <form action="">
                <div>
                  <label htmlFor="">author</label>
                  <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="enter your author"
                  />
                </div>
                <div>
                  <label htmlFor="">title</label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="enter your title"
                  />
                </div>
              </form>
              <button onClick={handleAddPost}>Add </button>
            </div>
            <br />
            <div className="form-add-posts">
              <h2>UPDATE POST</h2>
              <form action="">
                <div>
                  <label htmlFor="">author</label>
                  <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="enter your author"
                  />
                </div>
                <div>
                  <label htmlFor="">title</label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="enter your title"
                  />
                </div>
              </form>
              <button onClick={handleUpdatePost}>Update </button>
            </div>
            <br />
            <div className="form-delete-post">
              <h2>DELETE POST</h2>
              <form action="">
                <div>
                  <label htmlFor="">Delete</label>
                  <input
                    type="text"
                    name="delete"
                    onChange={(e) => setPostId(e.target.value)}
                    placeholder="enter your id delete"
                  />
                </div>
                <button onClick={handleDeletePost}>DELETE</button>
              </form>
            </div>
            <div className="display">
              {post &&
                post.length > 0 &&
                post.map((item, index) => (
                  <div className="title" key={item.id}>
                    {item.title} - {item.author}
                  </div>
                ))}
            </div>
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
