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
        const users = response.data.users;
        console.log(users);

        setUsers(users);
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
    <div>
      {users.map((user) => {
        const { firstName, lastName, image, company } = user;
        return console.log(company.title);
      })}
    </div>
  );
};

export default FilterUsers;
