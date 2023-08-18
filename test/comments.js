import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [msg, setMsg] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [tree, setTree] = useState([]);
  const [comments, setComments] = useState({});
  let obj = JSON.parse(JSON.stringify(comments));
  
  useEffect(() => {
    if (comments.message) {
      commentsData(comments, []);
    } else if (!comments.next) {
      setShowInput(true);
    }
  }, [comments]);

  const visibleInput = (data) => {
    if (data.next) {
      return visibleInput(data.next);
    } else {
      setShowInput(true);
    }
  };
  const submitMessage = (e, data) => {
    let new_node = {};
    if (e.keyCode === 13) {
      if (data.next) {
        return submitMessage(e, data.next);
      } else {
        new_node.message = msg;
        new_node.next = null;
        if (!data.message) {
          obj = new_node;
        } else data.next = new_node;
        setComments(obj);
        setMsg("");
        setShowInput(false);
      }
    }
  };
  const commentsData = (data, arr) => {
    let cmnts = JSON.parse(JSON.stringify(data));
    arr.push(
      <>
        <p>{cmnts.message}</p>
        <span
          style={{
            color: "grey",
            fontSize: "11px",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          Like
        </span>
        <span
          style={{
            color: "grey",
            fontSize: "11px",
            cursor: "pointer",
            marginRight: "10px"
          }}
          onClick={() => visibleInput(cmnts)}
        >
          Reply
        </span>
      </>
    );
    setTree(arr);
    if (cmnts.next) {
      return commentsData(cmnts.next, arr);
    }
  };

  return (
    <div className="App">
      {tree.map((item, index) => {
        return <React.Fragment key={index}>{item}</React.Fragment>;
      })}
      {showInput ? (
        <div>
          <input
            type="text"
            style={{ marginLeft: "40%" }}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyUp={(e) => submitMessage(e, obj)}
          />
        </div>
      ) : null}
    </div>
  );
}
