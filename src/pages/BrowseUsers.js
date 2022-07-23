import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
  FaRegUser,
  FaMapMarkedAlt,
  FaRegCalendarAlt,
  FaEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";

const url = "https://dummyjson.com/users";

const BrowseUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState();

  const fetchUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const users = data.users;
    console.log(users);
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="spinner"></div>
      </main>
    );
  }

  return (
    <>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / Browse Users
      </h1>
      <main>
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

            // const handleClick = (e) => {
            //   if (e.target.classList.contains("icon")) {
            //     const newValue = e.target.dataset.label;
            //     console.log(newValue);
            //     setValue(user[newValue]);

            //     setTitle(newValue);
            //   }
            // };
            //  const name = `${firstName} ${lastName}`;

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
    </>
  );
};

export default BrowseUsers;
