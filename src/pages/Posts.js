import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchPaginate from "../utility/useFetch";

const Posts = ({ id, title, body, tags }) => {
  return (
    // <ul className="blog-template">
    //   {data.posts.map((post) => {
    // const { id, title, body, tags } = post;
    // return (
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
    </li>
  );
  //   })}
  // </ul>
  //   );
};

export default Posts;
