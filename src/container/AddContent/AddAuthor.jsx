import React, { useState } from "react";

import client from "../../utils/axios";
import Container from "../Auth/styles/StySignUp";
import noPhoto from "../../assets/img/no-photo.jpg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Swal from "sweetalert2";

function AddAuthor() {
  const initialData = {
    firstName: "",
    lastName: "",
    date_of_birth: "",
    date_of_death: "",
  };

  const [data, setData] = useState(initialData);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"))._id
      const res = await client.post('/authors', {...data, user});
      if(res.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Author has been successfully created",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Finished adding",
          cancelButtonText: "Add more",
        }).then(({ value }) => {
          setData(initialData);
          return value ? (window.location = "/") : null;
        });
      }
      
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      })
    }
  };

  const { firstName, lastName, date_of_birth, date_of_death } = data;

  return (
    <Container>
      <div className="container__img">
        <img src={noPhoto} alt="book cover" />
        <h2 className="book_title">{`${data.firstName} ${data.lastName}`}</h2>
        <Button title="Upload cover" type={"submit"} />
      </div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">Add author</h1>

        <div className="form__group">
          <Input
            name="firstName"
            label="First name"
            type="text"
            value={firstName}
            placeholder="Enter first name"
            onChange={inputHandler}
          />
          <Input
            name="lastName"
            label="Last name"
            type="text"
            value={lastName}
            placeholder="Enter last name"
            onChange={inputHandler}
          />
          <Input
            name="date_of_birth"
            label="Date of birth"
            type="date"
            value={date_of_birth}
            placeholder="Enter date of birth"
            onChange={inputHandler}
          />
          <Input
            name="date_of_death"
            label="Date of death"
            type="date"
            value={date_of_death}
            placeholder="Enter date of death"
            onChange={inputHandler}
          />
          <Button title="Create" type={"submit"} />
        </div>
      </form>
    </Container>
  );
}

export default AddAuthor;
