import React, { useState } from "react";

const AllContact = ({ contact, deleteContact, addFavorite }) => {
  let x = [...contact].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="container mt-3" style={{ width: "80rem" }}>
      {x.length === 0 && <h2>No contacts</h2>}
      {x.map((val) => (
        <div
          className="col mt-5 ms-5"
          style={{ float: "left", width: "20rem" }}
          key={val.id}
        >
          <div className="card shadow-sm w-100">
            <div className="card-header">
              <div className="row">
                <div className="text-center">
                  {val.name}
                  <i
                    onClick={() => {
                      addFavorite(val.id);
                    }}
                    className="fa-solid fa-heart"
                    style={
                      val.fav
                        ? { float: "right", color: "red" }
                        : { float: "right" }
                    }
                  ></i>
                </div>
                <div className="col-2 offset-4"></div>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-center">{val.email}</li>
              <li className="list-group-item text-center">{val.phone} </li>
              <li className="list-group-item text-center">
                <button
                  onClick={() => {
                    deleteContact(val.id);
                  }}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllContact;
