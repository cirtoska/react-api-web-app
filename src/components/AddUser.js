import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      console.log(person);
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <div className="add-user">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-component">
              <label htmlFor="firstName">Name: </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-component">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn" type="submit">
              Add User
            </button>
          </form>
          {people.map((person) => {
            const { id, firstName, email } = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddUser;
