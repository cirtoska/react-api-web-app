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
import Footer from "../components/Footer";
import Loading from "../utility/Loading";

const User = () => {
  let { id } = useParams();
  const url = `https://dummyjson.com/users/${id}`;

  const postsUrl = `https://dummyjson.com/users/${id}/posts`;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [value, setValue] = useState();
  const [title, setTitle] = useState("username");
  const [getPosts, setGetPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(postsUrl);
    const postData = await response.json();
    const getPosts = postData.posts;
    setGetPosts(getPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  const fetchUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const user = data;
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (loading) {
    return <Loading />;
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

  const handleClick = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setValue(user[newValue]);
      setTitle(newValue);
    }
  };
  if (!user) return null;
  console.log(getPosts);
  return (
    <>
      <NavBar />
      <main>
        <h1>
          <Link to="/">Home</Link> / <Link to="/users">Users</Link> /{" "}
          {firstName} {lastName}
        </h1>
        <div className="product-card">
          <div className="block">
            <div className="about-user">
              <Link to="/add-user">
                <button className="btn">Add New User</button>
              </Link>
            </div>
            <img src={image} alt={username} className="user-image" />
            <p className="user-title">My {title} is</p>
            <p className="user-value">{value}</p>
            <div className="value-list">
              <button
                className="icon"
                data-label="username"
                onMouseOver={handleClick}
              >
                <FaRegUser />
              </button>
              <button
                className="icon"
                data-label="birthDate"
                onMouseOver={handleClick}
              >
                <FaRegCalendarAlt />
              </button>

              <button
                className="icon"
                data-label="email"
                onMouseOver={handleClick}
              >
                <FaEnvelopeOpen />
              </button>
              <button
                className="icon"
                data-label="phone"
                onMouseOver={handleClick}
              >
                <FaPhoneAlt />
              </button>
              <button
                className="icon"
                data-label="password"
                onMouseOver={handleClick}
              >
                <FaLock />
              </button>
              <button
                className="icon"
                data-label="university"
                onMouseOver={handleClick}
              >
                <FaUniversity />
              </button>
            </div>
          </div>

          {getPosts.length > 0 ? (
            <>
              <h2>Posts from {firstName}</h2>
              <div className="user-posts">
                {getPosts.map((items) => {
                  const { id, title, body } = items;
                  return (
                    <div className="postId" key={id}>
                      <h3>{`${title.substring(0, 40)}...`}</h3>
                      <p>
                        {`${body.substring(0, 100)}...`}{" "}
                        <Link to={`/posts/${id}`}>
                          <span className="text-btn">read more</span>
                        </Link>
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
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
      <Footer />
    </>
  );
};

export default User;
