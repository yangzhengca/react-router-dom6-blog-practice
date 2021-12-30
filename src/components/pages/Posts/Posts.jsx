import React, { useContext } from "react";
import Post from "../../Post/Post";
import { AppContext } from '../../../App'

function Posts() {
    const appCtx = useContext(AppContext)
    console.log(appCtx)
  return (
    <div className="container">
      <div className="row">
        <Post />
      </div>
    </div>
  );
}

export default Posts;
