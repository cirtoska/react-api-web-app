import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiClient from "../utility/apiCall";

const filterUrl =
  "https://dummyjson.com/users/filter?key=company.department&value=Services";

const FilterUsers = () => {
  const [users, setUsers] = useState("");
  const fetchUsers = () => {
    apiClient
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
  if (!users) return null;
  return (
    <section id="services">
      <h1>Meet our Team</h1>
      <div className="user-services">
        {users?.map((user, index) => {
          const { firstName, lastName, image, company, id } = user;
          return (
            <div className="services" key={index}>
              <img src={image} alt={firstName} />
              <div className="services-description">
                <Link to={`/users/${id}`}>
                  <h2 className="post-title">
                    {firstName} {lastName}
                  </h2>
                </Link>
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
