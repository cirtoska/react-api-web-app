import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams, Link, useLocation } from "react-router-dom";
import { VscReactions } from "react-icons/vsc";
import Footer from "../components/Footer";
import useFetch from "../utility/useFetch";
import Comments from "../components/Comments";

const Post = () => {
  let { id } = useParams();
  const url = `https://dummyjson.com/posts/${id}`;

  const { data } = useFetch(url);
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (data) setPost(data);
  }, [data, url]);

  useEffect(() => {
    setPost([]);
  }, [url]);

  if (post.length === 0) return null;
  const { title, body, userId, reactions, tags } = post;

  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / <Link to="/posts">Blog</Link>
      </h1>
      <main>
        <div className="product-card single-post">
          <h1 className="post-title">{title}</h1>
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
              <sup>{reactions}</sup>
            </span>
          </div>
          <p className="description">{body}</p>
          <Comments />
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
      <Footer />
    </>
  );
};

export default Post;
