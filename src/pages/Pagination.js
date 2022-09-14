import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import useFetch from "../utility/useFetch";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const url = `https://reqres.in/api/users?page=${pages}`;
  const { data } = useFetch(url);

  const page = Array.from({ length: data?.total_pages }, (_, i) => i + 1);

  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);
  if (!posts || !data) return null;
  console.log(data.data);
  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / <Link to="/posts">Blog</Link>
      </h1>
      <main>
        <div className="product-card single-post">
          {data.data.map((page) => {
            const { id, first_name, last_name, avatar } = page;
            return (
              <div key={id}>
                <img src={avatar} alt={first_name} style={{ width: 150 }} />
                <h1 className="post-title">
                  {first_name} {last_name}
                </h1>
              </div>
            );
          })}
        </div>
        {page.map((item) => {
          console.log(item);
          return (
            <button className="btn" onClick={() => setPages(item)}>
              {item}
            </button>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Pagination;
