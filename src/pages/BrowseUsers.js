import React, { useCallback, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { debounce } from "lodash";
import Footer from "../components/Footer";
import Loading from "../utility/Loading";
import Paginate from "../utility/Paginate";

// const url = "https://dummyjson.com/users";
const url = "https://dummyjson.com/users/search?q=";

const BrowseUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const searchValue = useRef("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const users = data.users;
      setUsers(users);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchUsers();
  }, [searchTerm, fetchUsers]);

  if (loading) {
    return <Loading />;
  }
  if (users.length < 1) {
    return <h2 className="user-title">no such user in our database</h2>;
  }
  const searchUser = () => {
    setSearchTerm(searchValue.current.value);
  };
  const searchRepeat = debounce((value) => {
    searchUser(value);
  }, 500);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Get current posts
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPosts, indexOfLastPosts);

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / Browse Users
      </h1>
      <main>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-component">
            <label htmlFor="search"></label>
            <input
              type="search"
              name="search"
              id="search"
              onChange={(e) => searchRepeat(e.target.value)}
              ref={searchValue}
              placeholder="Search Users..."
            />
          </div>
        </form>
        <div className="container">
          {currentPosts.map((user) => {
            const {
              id,
              firstName,
              lastName,
              birthDate,
              email,
              image,
              username,
              phone,
            } = user;
            const address = user.address.address;
            const city = user.address.city;
            const state = user.address.state;

            return (
              <Link to={`/users/${id}`} key={id}>
                <div className="product-card">
                  <div className="block-border"></div>
                  <div className="block">
                    <img src={image} alt={username} className="user-image" />
                    <p className="user-title">
                      {firstName} {lastName}
                    </p>
                    <p className="user-value">
                      {city}, {state}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="users-pagination">
          <Paginate
            postsPerPage={postsPerPage}
            totalPosts={users.length}
            paginate={paginate}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrowseUsers;
