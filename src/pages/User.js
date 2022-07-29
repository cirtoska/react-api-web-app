import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {
  FaRegUser,
  FaLock,
  FaMapMarkedAlt,
  FaUniversity,
  FaRegCalendarAlt,
  FaEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";

const User = () => {
  let { id } = useParams();
  const url = `https://dummyjson.com/users/${id}`;
  // const prevId = `https://dummyjson.com/users/${parseInt(id) - 1}`;
  // const nextId = `https://dummyjson.com/users/${parseInt(id) + 1}`;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  // console.log("location", location);
  const [value, setValue] = useState();
  const [title, setTitle] = useState("username");

  const fetchUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const user = data;
    console.log(user);
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <main>
        <div className="spinner"></div>
      </main>
    );
  }

  const {
    firstName,
    lastName,
    university,
    birthDate,
    email,
    image,
    username,
    phone,
  } = user;
  // const address = user.address.address;
  // const city = user.address.city;
  const handleClick = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setValue(user[newValue]);
      setTitle(newValue);
    }
  };
  if (!user) return null;
  return (
    <>
      <NavBar />
      <main>
        <h1>
          <Link to="/">Home</Link> / <Link to="/users">Users</Link> /{" "}
          {firstName} {lastName}
        </h1>
        <div className="product-card user">
          <div className="block">
            <img src={image} alt={username} className="user-image" />
            <p className="user-title">My {title} is</p>
            <p className="user-value">{value}</p>
            <div className="value-list">
              <button
                className="icon"
                data-label="username"
                // onClick={() => setValue(`${firstName} ${lastName}`)}
                onMouseOver={handleClick}
              >
                <FaRegUser />
              </button>
              <button
                className="icon"
                data-label="birthDate"
                // onClick={() => setValue(birthDate)}
                onMouseOver={handleClick}
              >
                <FaRegCalendarAlt />
              </button>

              <button
                className="icon"
                data-label="email"
                onMouseOver={handleClick}
                // onClick={() => setValue(email)}
              >
                <FaEnvelopeOpen />
              </button>
              <button
                className="icon"
                data-label="phone"
                // onClick={() => setValue(phone)}
                onMouseOver={handleClick}
              >
                <FaPhoneAlt />
              </button>
              <button
                className="icon"
                data-label="password"
                // onClick={() => setValue(phone)}
                onMouseOver={handleClick}
              >
                <FaLock />
              </button>
              <button
                className="icon"
                data-label="university"
                // onClick={() => setValue(phone)}
                onMouseOver={handleClick}
              >
                <FaUniversity />
              </button>
            </div>
          </div>
          <div className="about-user">
            <Link to="/add-user">
              <button className="btn">Add User</button>
            </Link>
          </div>
        </div>
        <div className="footer-navigation">
          <Link to={`/users/${parseInt(id) - 1}`}>
            <button className="btn-prev"></button>
          </Link>
          <Link to={`/users/${parseInt(id) + 1}`}>
            <button className="btn-next"></button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default User;
