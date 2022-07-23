import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useParams, useLocation, Link } from "react-router-dom";
import { VscReactions } from "react-icons/vsc";

const Post = () => {
  let { id } = useParams();
  const url = `https://dummyjson.com/posts/${id}`;
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;

        setLoading(false);
        setPost(data);
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
  if (post.length === 0) return null;
  const { title, body, userId, reactions, tags } = post;

  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / <Link to="/posts">Blog</Link> / {title}
      </h1>
      <main>
        <div className="product-card single-post">
          <h1>{title}</h1>
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

            <span className="rating">
              <span className="star-icon">
                <VscReactions />
              </span>
              {reactions}
            </span>
          </div>
          <p className="description">{body}</p>
        </div>
        <div className="footer-navigation">
          <Link to={`/posts/${parseInt(id) - 1}`}>
            <button className="btn-prev"></button>
          </Link>
          <Link to={`/posts/${parseInt(id) + 1}`}>
            <button className="btn-next"></button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Post;
