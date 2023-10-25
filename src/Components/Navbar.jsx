import React, { useState } from "react";
import AllContact from "./AllContact";
import AddContact from "./AddContact";
import { Route, Routes } from "react-router-dom";
import Links from "./Links";
const Navbar = () => {
  const [contact, setContact] = useState([]);
  const newContact = (data) => {
    setContact([...contact, data]);
  };
  const deleteContact = (id) => {
    setContact(
      contact.filter((val) => {
        return val.id !== id;
      })
    );
  };

  return (
    <div className="container mt-5">
      <Links />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AllContact contact={contact} deleteContact={deleteContact} />
            }
          ></Route>
          <Route
            path="/addContacts"
            element={<AddContact newContact={newContact} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
