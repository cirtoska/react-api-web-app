import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams, Link, useLocation } from "react-router-dom";
import { VscReactions } from "react-icons/vsc";
import Footer from "../components/Footer";
import useFetch from "../utility/useFetch";
// import Comments from "../components/Comments";

const Post = () => {
  let { id } = useParams();
  const url = `https://dummyjson.com/posts/${id}`;
  const commentsUrl = `https://dummyjson.com/comments/post/${id}`;

  let { pathname } = useLocation();

  const { data } = useFetch(url);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (data) setPost(data);
  }, [data, url]);

  const fetchComments = async () => {
    const response = await fetch(commentsUrl);
    const commentsData = await response.json();
    const comments = commentsData.comments;
    setComments(comments);
  };

  useEffect(() => {
    setPost([]);
  }, [url]);

  useEffect(() => {
    fetchComments();
  }, [pathname, url]);

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
          {/* <Comments /> */}
          <div className="comments-section">
            <h2>
              - Comments <sup>{comments.length}</sup>
            </h2>
            {comments.map((comment) => {
              const { id, body, user } = comment;

              return (
                <div className="comments" key={id}>
                  <div className="comment-body">
                    <h3>
                      <Link to={`/users/${id}`}>{user.username}</Link> wrote
                    </h3>
                    <p>{body}</p>
                    <button className="btn">Reply</button>
                  </div>
                </div>
              );
            })}
            <div className="add-new-comment">
              <h2>Leave a comment</h2>
              <form className="comment-form">
                <div className="comment-container">
                  <label htmlFor="username"></label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Write your name here..."
                  />
                </div>
                <div className="comment-container">
                  <label htmlFor="textarea"></label>
                  <textarea
                    id="textarea"
                    placeholder="What are your thoughts?"
                  />
                </div>
                <button type="submit" className="btn">
                  Respond
                </button>
              </form>
            </div>
          </div>
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
