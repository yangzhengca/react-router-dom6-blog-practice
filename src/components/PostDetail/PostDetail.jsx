import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";

function PostDetail() {
  const appCtx = useContext(AppContext);
  const { id } = useParams();

  return (
    <div className="container" >
      {appCtx && (
        <>
          <h1>{appCtx.filter((post) => post.id == id)[0].title}</h1>
          <p>{appCtx.filter((post) => post.id == id)[0].body}</p>
          <p>Author ID: {appCtx.filter((post) => post.id == id)[0].userId}</p>
          <p>id: {id}</p>
        </>
      )}
    </div>
  );
}

export default PostDetail;
