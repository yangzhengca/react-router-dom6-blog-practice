import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {

  return (
    <div className="col-md-4 py={5}" key={post.id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body.slice(0, 80)}...</p>
          <Link to={`/posts/${post.id}`} className="card-link">
            Details
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Post;
