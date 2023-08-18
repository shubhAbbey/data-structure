import React, { useState, useEffect } from "react";
import "./styles.css";


let arr = [
    {
        id:"01",
        p_id:null,
        text:"hello",
        replies:[
            {
                id:"02",
                p_id:"01",
                text:"Hi",
                margin:20,
                replies:[]
            },
            {
                id:"03",
                p_id:"01",
                text:"Hi",
                margin:20,
                replies:[
                    {
                        id:"04",
                        p_id:"03",
                        text:"Hi 03",
                        margin:20,
                        replies:[]
                    }
                ]
            },
        ]
    },
    {
        id:"05",
        p_id:null,
        text:"hello",
        replies:[
            {
                id:"06",
                p_id:"05",
                text:"Hi",
                margin:20,
                replies:[]
            },
            {
                id:"07",
                p_id:"05",
                text:"Hi",
                margin:20,
                replies:[
                    {
                        id:"08",
                        p_id:"07",
                        text:"Hi 07",
                        margin:20,
                        replies:[]
                    }
                ]
            },
        ]
    }
]
export default function App() {

  return (
    <>
    {
      arr.map((item,index)=>{
        return <div key = {index}>
            {
            //   item.replies.length?
            }
        </div>
      })
    }
  </>
  )
  // const [msg, setMsg] = useState("");
  // const [showInput, setShowInput] = useState(false);
  // const [inputMargin, setInputMargin] = useState(30);
  // const [tree, setTree] = useState([]);
  // const [comments, setComments] = useState({});
  // let obj = JSON.parse(JSON.stringify(comments));
  
  // useEffect(() => {
  //   if (comments.message) {
  //     commentsData(comments, []);
  //   } else if (!comments.next) {
  //     setShowInput(true);
  //   }
  // }, [comments]);

  // const visibleInput = (data) => {
  //   if (data.next) {
  //     return visibleInput(data.next);
  //   } else {
  //     setShowInput(true);
  //     setInputMargin(data=>data+30)
  //   }
  // };
  // const submitMessage = (e, data) => {
  //   let new_node = {};
  //   if (e.keyCode === 13) {
  //     if (data.next) {
  //       return submitMessage(e, data.next);
  //     } else {
  //       new_node.message = msg;
  //       new_node.next = null;
  //       new_node.marginL=inputMargin
  //       if (!data.message) {
  //         obj = new_node;
  //       } else data.next = new_node;
  //       setComments(obj);
  //       setMsg("");
  //       setShowInput(false);
  //     }
  //   }
  // };
  // const commentsData = (data, arr) => {
  //   let cmnts = JSON.parse(JSON.stringify(data));
  //   arr.push(
  //     <div style={{marginLeft:`${cmnts.marginL}px`}}>
  //       <p>{cmnts.message}</p>
  //       <span
  //         style={{
  //           color: "grey",
  //           fontSize: "11px",
  //           cursor: "pointer",
  //           marginRight: "10px"
  //         }}
  //       >
  //         Like
  //       </span>
  //       <span
  //         style={{
  //           color: "grey",
  //           fontSize: "11px",
  //           cursor: "pointer",
  //           marginRight: "10px"
  //         }}
  //         onClick={() => visibleInput(cmnts)}
  //       >
  //         Reply
  //       </span>
  //     </div>
  //   );
  //   setTree(arr);
  //   if (cmnts.next) {
  //     return commentsData(cmnts.next, arr);
  //   }
  // };

  // return (
  //   <div>
  //     {tree.map((item, index) => {
  //       return <React.Fragment key={index}>{item}</React.Fragment>;
  //     })}
  //     {showInput ? (
          
  //       <div style={{marginLeft:`${inputMargin}px`}}>
  //           <div>Add a new Comment</div>
  //           <textarea
  //           rows = {4}
  //           cols = {150}
  //           onChange={(e) => setMsg(e.target.value)}
  //           onKeyUp={(e) => submitMessage(e, obj)}
  //         />
  //       </div>
  //     ) : null}
  //   </div>
  // );
// return (
//     <React.Fragment>

//     </React.Fragment>
// )
}
