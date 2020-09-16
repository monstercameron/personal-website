import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import firebase from "../config/config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const NewBlog = () => {
  const db = firebase.firestore();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");
  const [messageNotif] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setuser] = useState(null);
  const [showLogin] = useState(true);
  const currentUser = firebase.auth().currentUser;

  const makePost = () => {
    return {
      author: user ? user.displayName : "username",
      date: Date.now(),
      tags,
      text: value,
      title,
    };
  };

  const sendPost = (collection, post) => async () => {
    try {
      Object.keys(post)
        .map((itm) => post[itm])
        .filter((_) => null || undefined).length === post.length ||
        new Error("Null Value Found, check inputs");
      const res = await db.collection(collection).add(post);
      setMessage(`Document written with ID: ${res.id}`);
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => setLoggedIn(true),
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  useEffect(() => {
    if (firebase.auth().currentUser) {
      setuser(firebase.auth().currentUser);
      setLoggedIn(true);
    }
  }, [currentUser]);

  return (
    <div className="border container">
      {messageNotif && (
        <div className="row">
          <div className="col-12 mx-auto text-center">{message}</div>
        </div>
      )}
      {!loggedIn && (
        <div className="row">
          <div
            className="col-10 border mx-auto p-1 my-3 bg-light"
            style={showLogin ? { display: "initial" } : { display: "none" }}
          >
            <div className="row">
              <div className="col-12 pb-2">
                <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {loggedIn && (
        <>
          <div className="row">
            <div className="col-auto border ml-auto mr-5 mt-3 bg-light text-dark text-right text-capitalize">
              <h6>Logged in:</h6>
              {user ? user.displayName : "username"}
              <Link to="/blog" onClick={() => firebase.auth().signOut()}>
                {" "}
                sign out?
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-10 border mx-auto mt-3 bg-light mb-3 p-2 text-dark">
              <input
                className="form-control mb-1"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="form-control mb-1"
                type="text"
                placeholder="Tags"
                onChange={(e) => setTags(e.target.value)}
              />
              <ReactQuill
                theme="snow"
                className="border mb-1"
                style={{ height: "auto" }}
                value={value}
                onChange={setValue}
              />
              <button
                className="btn btn-outline-danger btn-block"
                onClick={sendPost("posts", makePost())}
              >
                save
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewBlog;
