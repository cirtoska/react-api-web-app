import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useParams, useLocation, Link } from "react-router-dom";
import { VscReactions } from "react-icons/vsc";
import Footer from "../components/Footer";

const Post = () => {
  let { id } = useParams();
  let { pathname } = useLocation();
  const url = `https://dummyjson.com/posts/${id}`;
  const commentsUrl = `https://dummyjson.com/comments/post/${id}`;

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState({
    body: "",
    postId: "",
    userId: "",
  });

  const fetchPost = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data);
    setLoading(false);
  };

  const fetchComments = async () => {
    const response = await fetch(commentsUrl);
    const commentsData = await response.json();
    const comments = commentsData.comments;
    setComments(comments);
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [pathname]);

  const addNewComment = () => {
    axios
      .post("https://dummyjson.com/comments/add", {
        body: addComment.body,
        postId: addComment.postId,
        userId: addComment.userId,
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    // console.log(data);
    addNewComment(addComment);
  }, [addComment]);

  if (loading) {
    return (
      <main>
        <div className="spinner"></div>
      </main>
    );
  }
  if (post.length === 0) return null;
  const { title, body, userId, reactions, tags } = post;
  console.log(userId);
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
          <div className="comments-section">
            <h2>
              - Comments <sup>{comments.length}</sup>
            </h2>
            {comments.map((comment) => {
              const { id, body, postId, user } = comment;

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
              <form className="comment-form" onSubmit={addNewComment}>
                <div className="comment-container">
                  <label htmlFor="username">Your name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) =>
                      setAddComment({ ...addComment, username: e.target.value })
                    }
                  />
                </div>
                <div className="comment-container">
                  <label htmlFor="textarea">Your Message</label>
                  <textarea
                    id="textarea"
                    onChange={(e) =>
                      setAddComment({ ...addComment, body: e.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn btn-xl">
                  Send
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
