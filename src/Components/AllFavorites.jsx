import React from "react";

const AllFavorites = ({ contact, addFavorite, deleteContact }) => {
  const favoriteContacts = contact.filter((val) => val.fav);
  if (favoriteContacts.length === 0) {
    return <h2 className="mt-5">No Favorites</h2>;
  }

  return (
    <div>
      {contact.map((val) => {
        if (contact.length == 0 || val.fav.length == 0) {
          return <h2>No favorites</h2>;
        }
        if (val.fav == true) {
          return (
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
          );
        }
      })}
    </div>
  );
};

export default AllFavorites;
