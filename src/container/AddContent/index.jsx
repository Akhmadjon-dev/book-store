import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import client from '../../utils/axios';
import Container from '../Auth/styles/StySignUp';
import noPhoto from '../../assets/img/no-photo.jpg';
import Input from '../../components/Input';
import Button from '../../components/Button';




function AddContent() {
  const [data, setData] = useState({
    title: '',
    author: '',
    pages: '',
    year: '',
    price: '',
    country: '',
    description: '',
  });
  //const navigate = useNavigate();



  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await client.post('/books', data);
      if(res.status === 201) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        // navigate('/', { replace: true });
        window.location = ('/')
      }

    }
    catch (error) {
      console.log(error);
    }
  }

  console.log(data);

  const { title, pages, year, price, country, author, description } = data;

  return <Container>
      <div className="container__img">
        <img src={noPhoto} alt="book cover"/>
        <h2 className="book_title">{ data.title }</h2>
        <Button title="Upload cover" type={'submit'} />
      </div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">
          Add book
        </h1>

        <div className="form__group">
          <Input name="title" label="Title" type="text" value={title} placeholder="Enter title" onChange={inputHandler} />
          <Input name="author" label="Author" type="text" value={author} placeholder="Enter author" onChange={inputHandler} />
          <Input name="pages" label="Pages" type="text" value={pages} placeholder="Enter pages" onChange={inputHandler} />
          <Input name="year" label="Release Year" type="number" value={year} placeholder="Enter year" onChange={inputHandler} />
          <Input name="price" label="Price" type="number" value={price} placeholder="Enter price" onChange={inputHandler} />
          <Input name="country" label="Country" type="text" value={country} placeholder="Enter country" onChange={inputHandler} />
          <Input name="description" label="Description" type="text" value={description} placeholder="Enter description" onChange={inputHandler} />
          <Button title="Create" type={'submit'} />
        </div>
      </form>
  </Container>;
}

export default AddContent;