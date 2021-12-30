import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Posts from "./components/pages/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import PostDetail from "./components/PostDetail/PostDetail";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export const AppContext = React.createContext();

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 


  return (
    <>
      <AppContext.Provider value={posts}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="*" element={<h2>No page found</h2>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
