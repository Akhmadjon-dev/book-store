import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import client from "../../utils/axios";
import Container from "../Auth/styles/StySignUp";
import noPhoto from "../../assets/img/no-photo.jpg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Swal from 'sweetalert2'
import { categories } from "../../components/Tabs";


function AddBook() {
  
  const initialData = {
    title: "",
    author: "",
    pages: "",
    year: "",
    category: "",
    price: "",
    country: "",
    description: "",
  };

  const [data, setData] = useState({
    title: "",
    author: "",
    pages: "",
    year: "",
    category: "",
    price: "",
    country: "",
    description: "",
  });
  //const navigate = useNavigate();

  const [authors, setAuthors] = useState([]);

  const [image, setImage] = useState(null);

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = async () => {
    try {
      const res = await client.get("/authors");
      if (res.status === 200) {
        setAuthors(res.data.payload);
      }
      console.log("this is author", res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const fileHandler = (e) => {
    // if(e.target.files.length !== 0){
    //   setImage(URL.createObjectURL(e.target.files[0]))
    // }
    setImage(e.target.files)
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  console.log(data)

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('pages', data.pages);
    formData.append('year', Date.parse(data.year));
    formData.append('category', data.category);
    formData.append('price', data.price);
    formData.append('country', data.country);
    formData.append('description', data.description);
    // formData.append('files', image);
    console.log("form data", formData)
    try {
      const res = await client.post("/books", formData);
      if (res.status === 201) {
        console.log("successfully created");
        Swal.fire({
          title: "Success!",
          text: "Author has been successfully created",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Finished adding",
          cancelButtonText: "Add more",
        })
        .then(({value}) => {
          setData(initialData)
          return value ? (window.location = "/") : null;
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { title, pages, year, price, country, author, description } = data;

  return (
    <Container>
      <div className="container__img">
        <img src={image} alt="book cover" />
        <h2 className="book_title">{data.title}</h2>
        <Input
          label="Upload cover"
          name="files"
          type="file"
          onChange={fileHandler}
        />
      </div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">Add book</h1>

        <div className="form__group">
          <Input
            name="title"
            label="Title"
            type="text"
            value={title}
            placeholder="Enter title"
            onChange={ inputHandler }
          />
          <Input
            name="category"
            options={ categories }
            isSelect
            isCategory
            label="Category"
            value="Select category"
            onChange={inputHandler}
          />
          <Input
            name="pages"
            label="Pages"
            type="text"
            value={pages}
            placeholder="Enter pages"
            onChange={inputHandler}
          />
          <Input
            name="year"
            label="Release Year"
            type="date"
            value={year}
            placeholder="Enter year"
            onChange={inputHandler}
          />
          <Input
            name="author"
            options={authors}
            isSelect
            label="Author"
            value="Select author"
            onChange={inputHandler}
          />
          <Input
            name="price"
            label="Price"
            type="number"
            value={price}
            placeholder="Enter price"
            onChange={inputHandler}
          />
          <Input
            name="country"
            label="Country"
            type="text"
            value={country}
            placeholder="Enter country"
            onChange={inputHandler}
          />
          <Input
            name="description"
            label="Description"
            type="text"
            value={description}
            placeholder="Enter description"
            onChange={inputHandler}
          />
          <Button title="Create" type={"submit"} />
        </div>
      </form>
    </Container>
  );
}

export default AddBook;
