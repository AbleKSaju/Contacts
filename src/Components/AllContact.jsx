import Table from "react-bootstrap/Table";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
const AllContact = ({ contact,deleteContact }) => {
  let x = [...contact].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="container mt-5" style={{ width: "30rem" }}>
      {x.map((val) => (
        <div className="col" key={val.id}>
          <div className="card shadow-sm w-100">
            <div className="card-header">
              <div className="row">
                <div className="col-6 ">{val.name}</div>
                <div
                  // onClick={() => {
                  //   favToggle(id);
                  // }}
                  className="col-2 offset-4"
                >
                  {/* <i
              className={
                fav
                  ? "fas fa-star text-warning"
                  : "far fa-star text-warning"
              }
            ></i> */}
                </div>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{val.email}</li>
              <li className="list-group-item">{val.phone} </li>
              <li className="list-group-item">
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
