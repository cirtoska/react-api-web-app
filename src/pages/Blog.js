import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const url = "https://dummyjson.com/posts";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const posts = response.data.posts;
        // console.log(posts);
        setLoading(false);
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <div className="spinner"></div>
      </main>
    );
  }
  if (posts.length === 0) return null;

  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / Blog
      </h1>
      <main id="blog">
        <ul className="blog-template">
          {posts.map((post) => {
            const { id, title, body, tags } = post;
            return (
              <li className="blog-post" key={id}>
                <h2 className="post-title">{`${title.substring(0, 50)}...`}</h2>
                <div className="product-header">
                  <span className="tags">
                    {tags.map((tag, index) => {
                      return (
                        <span className="category" key={index}>
                          {tag}
                        </span>
                      );
                    })}
                  </span>
                </div>
                <p>{`${body.substring(0, 100)}...`}</p>
                <Link to={`/posts/${id}`}>
                  <button className="btn blog-btn">read more</button>
                </Link>
                {/* <div className="line"></div> */}
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
