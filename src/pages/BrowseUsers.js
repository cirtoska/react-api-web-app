import React, { useCallback, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { debounce } from "lodash";
import Footer from "../components/Footer";

// const url = "https://dummyjson.com/users";
const url = "https://dummyjson.com/users/search?q=";

const BrowseUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const searchValue = useRef("");

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
    return (
      <main>
        <div className="spinner"></div>
      </main>
    );
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
  console.log(searchTerm);
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
          {users.map((user) => {
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
      </main>
      <Footer />
    </>
  );
};

export default BrowseUsers;
