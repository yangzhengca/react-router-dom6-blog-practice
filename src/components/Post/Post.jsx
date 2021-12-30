import React from "react";
import { Link, useNavigate } from 'react-router-dom'

function Post({ post }) {
  const navigate = useNavigate()
  return (
    <div className="col-md-4 py={5}" key={post.id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.body.slice(0, 80)}...
          </p>
          {/* <Link to={`/posts/${post.id}`} className="card-link">
            Details
          </Link> */}
          <button className="btn btn-primary" onClick={()=>navigate(`/posts/${post.id}`,{post:post})} >Details</button>
          
        </div>
      </div>
    </div>
  );
}

export default Post;
