import React, { useState } from "react";

export const BuildPost = ({ doc }) => {
  const [show, setShow] = useState(false);
  const { author, date, tags, title, text } = doc.data();
  const tagMaker = (tags) =>
    tags
      .trim()
      .split(",")
      .filter((item) => item)
      .map((tag, idx) => (
        <span
          key={`${doc.id}-tags-${idx}`}
          className="border p-1 px-1 mb-1 mr-1 shadow-sm"
          style={{ backgroundColor: "white" }}
        >
          {tag.trim()}
        </span>
      ));
  return (
    <div className="row">
      <div className="col-11 mx-auto border shadow my-2 bg-light text-dark">
        <div className="row">
          <div className="col-12 text-left pt-1">
            <h5>{author}</h5>
          </div>
          <div className="col-12 text-left">{`${new Date(date)}`}</div>
          <div className="col-11 mx-auto my-4">
            <div className="row">{tagMaker(tags)}</div>
          </div>
          <div
            className="col-12 mb-3 text-center text-capitalize"
            style={{ cursor: "pointer" }}
          >
            <h3 onClick={() => setShow(!show)}>
              <u>{title}</u>
            </h3>
          </div>
          <div
            className="col-12"
            style={
              show
                ? { visibility: "visible", display: "initial" }
                : { visibility: "hidden", display: "none" }
            }
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <div
            className="col-1 ml-auto p-2"
            style={
              show
                ? { visibility: "visible", display: "initial" }
                : { visibility: "hidden", display: "none" }
            }
            onClick={() => setShow(!show)}
          >
            <button className="btn btn-outline-danger">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};
