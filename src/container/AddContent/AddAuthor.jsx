import React, {useState} from 'react'

import client from '../../utils/axios';
import Container from '../Auth/styles/StySignUp';
import noPhoto from '../../assets/img/no-photo.jpg';
import Input from '../../components/Input';
import Button from '../../components/Button';




function AddAuthor() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    date_of_birth: '',
    date_of_death: '',
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
      const res = await client.post('/authors', data);
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

  const { firstName, lastName, date_of_birth, date_of_death } = data;

  return <Container>
      <div className="container__img">
        <img src={noPhoto} alt="book cover"/>
        <h2 className="book_title">{ data.firstName }</h2>
        <Button title="Upload cover" type={'submit'} />
      </div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">
          Add author
        </h1>

        <div className="form__group">
          <Input name="firstName" label="First name" type="text" value={firstName} placeholder="Enter first name" onChange={inputHandler} />
          <Input name="lastName" label="Last name" type="text" value={lastName} placeholder="Enter last name" onChange={inputHandler} />
          <Input name="date_of_birth" label="Date of birth" type="date" value={date_of_birth} placeholder="Enter date of birth" onChange={inputHandler} />
          <Input name="date_of_death" label="Date of death" type="date" value={date_of_death} placeholder="Enter date of death" onChange={inputHandler} />
          <Button title="Create" type={'submit'} />
        </div>
      </form>
  </Container>;
}

export default AddAuthor;