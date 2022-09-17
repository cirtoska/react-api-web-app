import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import useFetchPaginate from "../utility/useFetch";
import Posts from "./Posts";
import Paginate from "../utility/Paginate";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const url = "https://dummyjson.com/posts";

  const { data } = useFetchPaginate(url);

  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);

  useEffect(() => {
    setPosts([]);
  }, [url]);

  if (!data) return null;

  // Get current posts
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = data.posts.slice(indexOfFirstPosts, indexOfLastPosts);

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / Blog
      </h1>
      <main className="blog">
        <ul className="blog-template">
          {currentPosts.map((post) => {
            const { id } = post;
            return <Posts key={id} {...post} />;
          })}
        </ul>
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={data.posts.length}
          paginate={paginate}
        />
        {/* <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>
          {data.posts.map((item, index) => {
            return (
              <button
                key={index}
                // className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
