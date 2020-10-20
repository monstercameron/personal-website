import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// spinners
import "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
//firestore and data model
import firebase from "../config/config";
import { BuildPost } from "../model/post";

const Blog = () => {
  const db = firebase.firestore();
  const [posts, addPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const collection = "posts";
  //   const [count, setCount] = useState(0);
  // run useEffect once
  useEffect(() => {
    (async () => {
      await getPosts(posts, "")();
      //   const newCount = await getCollectionCount();
      //   setCount(newCount);
    })();
  });
  // get post collection count to calculate the page
  //   const getCollectionCount = async () =>
  //     (await db.collection("users").get()).docs.length;
  // get the posts to fill a page
  const getPosts = (posts, direction) => async () => {
    try {
      // login to load the next pages
      if (posts) {
        // logic to toggle page load buttons
        if (direction === "next") setPage(page + 1);
        else if (direction === "previous" && page > 1) setPage(page - 1);
        let docs = null;
        if (direction === "next") {
          docs = await db
            .collection(collection)
            .startAfter(posts.docs[posts.docs.length - 1])
            .limit(limit)
            .get();
        } else if (direction === "previous") {
          docs = await db
            .collection(collection)
            .endBefore(posts.docs[posts.docs.length - 1])
            .limit(limit)
            .get();
        }
        addPosts(docs && docs.docs.length >= 1 ? docs : posts);
      } else {
        const docs = await db
          .collection(collection)
          .orderBy("date")
          .limit(limit)
          .get();
        addPosts(docs);
      }
    } catch (error) {
      console.warn(error);
    }
  };
  const displayPosts = (docs) =>
    docs.map((doc) => <BuildPost key={doc.id} doc={doc} />);

  //   console.log("page:", page);
  return (
    <>
      <div className="border p-1 container">
        <div className="row">
          <div className="col-3 ml-auto mx-1">
            <Link to="/new">
              <button className="btn btn-block btn-outline-warning">
                New Post
              </button>
            </Link>
          </div>
        </div>
        {posts ? (
          displayPosts(posts.docs)
        ) : (
          <div className="row">
            <div className="col-auto mx-auto py-5">
              <ClipLoader size={150} color={"#ffc107"} loading={true} />
            </div>
          </div>
        )}
        <div className="row my-4">
          <div className="col-6">
            {page > 1 && (
              <div className="col-6 ml-auto">
                <button
                  className="btn btn-block btn-outline-warning"
                  onClick={getPosts(posts, "previous")}
                >
                  previous
                </button>
              </div>
            )}
          </div>
          <div className="col-6">
            <div className="col-6">
              <button
                className="btn btn-block btn-outline-warning"
                onClick={getPosts(posts, "next")}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
