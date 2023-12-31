import React, { useState } from "react";
import AllContact from "./AllContact";
import AddContact from "./AddContact";
import { Route, Routes } from "react-router-dom";
import Links from "./Links";
import AllFavorites from "./AllFavorites";
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
  const addFavorite = (id) => {
    const contacts = [...contact];
    contacts.filter((val) => {
      if (val.id === id) {
        val.fav = !val.fav;
      }
    });
    setContact(contacts);
  };
  console.log(contact);

  return (
    <div className="container mt-5">
      <Links />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AllContact
                contact={contact}
                deleteContact={deleteContact}
                addFavorite={addFavorite}
              />
            }
          ></Route>
          <Route
            path="/addContacts"
            element={<AddContact newContact={newContact} />}
          ></Route>
          <Route
            path="/favorites"
            element={
              <AllFavorites
                contact={contact}
                deleteContact={deleteContact}
                addFavorite={addFavorite}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
