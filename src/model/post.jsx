import React, { useState, useEffect } from "react";
import readingTime from "reading-time";

export const BuildPost = ({ doc }) => {
  const [show, setShow] = useState(false);
  const { author, date, tags, title, text } = doc.data();
  const [speakerStatus, setSpeakerStatus] = useState("ready to read article.");
  const [articleLength, setArticleLength] = useState(null);
  const speaker = window.speechSynthesis;
  const readThisText = new SpeechSynthesisUtterance(text);
  const readToMePlay = () => {
    if (speaker.paused) {
      speaker.resume();
    } else {
      speaker.speak(readThisText);
    }
    setSpeakerStatus("reading article...");
  };
  const readToMePause = () => {
    if (speaker.speaking) {
      speaker.pause();
      setSpeakerStatus("reading article paused.");
    }
  };
  const readToMeCancel = () => {
    speaker.resume();
    speaker.cancel();
    setSpeakerStatus("ready to read article.");
  };
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
  useEffect(() => {
    readThisText.onend = () => setSpeakerStatus("ready to read article.");
    setArticleLength(readingTime(text).text);
  }, [readThisText, text]);

  return (
    <div className="row">
      <div className="col-11 mx-auto border shadow my-2 bg-light text-dark">
        <div className="row">
          <div className="col-auto text-left pt-1 ml-2">
            <h5 className="text-capitalize">{author}</h5>
          </div>
          <div className="col-auto ml-auto text-right pt-1">
            <h5>{`${new Date(date)}`}</h5>
          </div>
          <div
            className="col-12 mb-3 text-center text-capitalize"
            style={{ cursor: "pointer" }}
          >
            <h3 onClick={() => setShow(!show)}>
              <u>{title}</u>
            </h3>
          </div>
          <div className="pl-3 pr-1 pb-3">
            <button
              className="btn btn-success btn-block"
              onClick={readToMePlay}
            >
              <span
                className="material-icons"
                style={{ verticalAlign: "middle" }}
              >
                play_arrow
              </span>
            </button>
          </div>
          <div className="pb-3 pr-1">
            <button
              className="btn btn-primary btn-block"
              onClick={readToMePause}
            >
              <span
                className="material-icons"
                style={{ verticalAlign: "middle" }}
              >
                pause
              </span>
            </button>
          </div>
          <div className="pb-3">
            <button
              className="btn btn-danger btn-block"
              onClick={readToMeCancel}
            >
              <span
                className="material-icons"
                style={{ verticalAlign: "middle" }}
              >
                stop
              </span>
            </button>
          </div>
          <div className="pb-3 pl-3">
            <h4>Status: {speakerStatus}</h4>
          </div>
          <div className="pb-3 pl-3 ml-auto mr-3">
            <h4>{articleLength}</h4>
          </div>
          <div className="col-12 mx-3 my-2">
            <div className="row">{tagMaker(tags)}</div>
          </div>
          <div
            className="col-12"
            style={
              show
                ? {
                    visibility: "visible",
                    display: "initial",
                    transition: "5s",
                  }
                : { visibility: "hidden", display: "none", transition: "5s" }
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
