import React, { useState, useEffect } from "react";
import useFetch from "../utility/useFetch";
import { Link, useLocation, useParams } from "react-router-dom";

const Comments = () => {
  let { id } = useParams();
  const url = `https://dummyjson.com/comments/post/${id}`;

  const { data } = useFetch(url);
  console.log("data:", data);

  if (!data) return null;
  return (
    <div className="comments-section">
      <h2>
        - Comments <sup>{data.comments.length}</sup>
      </h2>
      {data.comments.map((comment) => {
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
            <textarea id="textarea" placeholder="What are your thoughts?" />
          </div>
          <button type="submit" className="btn">
            Respond
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
