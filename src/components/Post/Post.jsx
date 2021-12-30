import React from "react";
import { Link } from 'react-router-dom'

function Post() {
  return (
    <div className="col-md-6 py=2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/posts/:id" className="card-link">
            Card link
          </Link>
          <Link to="/posts/:id" className="card-link">
            Another link
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
