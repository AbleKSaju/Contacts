import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Links = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="container-fluid justify-content-start">
        <button className="btn btn-outline-success me-2" type="button">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            All Contacts
          </Link>
        </button>
        <button className="btn btn-outline-success me-2" type="button">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/addContacts"
          >
            Add Contacts
          </Link>
        </button>
        <button className="btn btn-outline-success me-2" type="button">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/favorites"
          >
            Favorites
          </Link>
        </button>
      </form>
    </nav>
  );
};

export default Links;
