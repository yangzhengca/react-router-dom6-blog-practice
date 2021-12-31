import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Home() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function deletePost() {
      axios.delete(`${baseURL}/1`)
      .then(() => {
          alert("post deleted!");
          setPost(null);
      })
  }
//   if (!post) return "No post!";

  return (
    <div>
      <h1>Home</h1>
      {post && <><h1>{post.title}</h1>
      <p>{post.body}</p></>}

      <button className="btn btn-primary mx-2" onClick={createPost}>Create Post</button>
      <button className="btn btn-primary mx-2" onClick={updatePost}>Update Post</button>
      <button className="btn btn-primary mx-2" onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default Home;
