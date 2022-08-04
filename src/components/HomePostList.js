import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePostList = () => {
  const [posts, setPosts] = useState([]);

  const url = "https://dummyjson.com/posts?limit=6";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const posts = response.data.posts;
        // console.log(posts);
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (posts.length === 0) return null;

  return (
    <>
      <h1>Latest Posts</h1>
      <section className="home-posts">
        {posts.map((post) => {
          const { id, title, body, tags } = post;
          return (
            <div className="postId" key={id}>
              <Link to={`/posts/${id}`}>
                <h2 className="post-title">{`${title.substring(0, 17)}...`}</h2>
              </Link>
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
              <p>
                {`${body.substring(0, 100)}...`}{" "}
                <Link to={`/posts/${id}`}>
                  <span className="text-btn">read more</span>
                </Link>
              </p>
              {/* <div className="line"></div> */}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HomePostList;
