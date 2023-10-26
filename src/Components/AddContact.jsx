import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const AddContact = ({ newContact }) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const submit = (data) => {
    data.id = Date.now();
    data.fav = false;
    reset();
    newContact(data);
    navigate("/");
  };
  return (
    <div
      className="container bg-secondary rounded border border-dark mt-5"
      style={{ height: "500px", width: "500px", border: "2px black" }}
    >
      <div className="mt-3" style={{ textAlign: "center" }}>
        <h1 className="mt-2">Add New Contact</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mt-3">
            <p>Name</p>
            <input
              className="mt-0 border rounded"
              style={{ width: "75%", height: "40px" }}
              {...register("name", {
                required: "Name Required",
                pattern: {
                  value:
                    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                  message: "Full name required",
                },
              })}
              type="text"
            />
            <br />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
            <br />

            <p>Email</p>
            <input
              className="mt-0 border  rounded"
              style={{ width: "75%", height: "40px" }}
              {...register("email", {
                required: "Email required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid Email",
                },
              })}
              type="text"
            />
            <br />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
            <br />

            <p>Phone</p>
            <input
              className="mt-0 border  rounded"
              style={{ width: "75%", height: "40px" }}
              {...register("phone", {
                required: "Number required",
                pattern: {
                  value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                  message: "Invalid Phone Number",
                },
              })}
              type="text"
            />
            <br />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
            <br />
          </div>
          <button type="submit" className="btn btn-outline-dark mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
