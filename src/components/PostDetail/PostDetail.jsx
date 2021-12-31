import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

function PostDetail() {
  const appCtx = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate()

  return (
    <div className="container" >
      {appCtx && (
        <>
          <h1>{appCtx.filter((post) => post.id == id)[0].title}</h1>
          <p>{appCtx.filter((post) => post.id == id)[0].body}</p>
          <p>Author ID: {appCtx.filter((post) => post.id == id)[0].userId}</p>
          <p>id: {id}</p>
          <button className="btn btn-primary" onClick={()=>navigate(-1)}>Go back</button>
        </>
      )}
    </div>
  );
}

export default PostDetail;
