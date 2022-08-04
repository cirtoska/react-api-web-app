import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const filterUrl =
  "https://dummyjson.com/users/filter?key=company.department&value=Services";

const FilterUsers = () => {
  const [users, setUsers] = useState("");
  const fetchUsers = () => {
    axios
      .get(filterUrl)
      .then((response) => {
        console.log(response.data.users);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  if (!users === 0) return null;
  return (
    <section id="services">
      <h1>Meet our Team</h1>
      <div className="user-services">
        {users.map((user, index) => {
          const { firstName, lastName, image, company } = user;
          return (
            <div className="services" key={index}>
              <img src={image} alt={firstName} />
              <div className="services-description">
                <h2 className="post-title">
                  {firstName} {lastName}
                </h2>
                <p className="job-title">{company.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FilterUsers;
