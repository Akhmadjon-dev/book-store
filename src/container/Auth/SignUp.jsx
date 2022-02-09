import React, { useState,  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import client from '../../utils/axios';
import Container from './styles/StySignUp';
import img from '../../assets/img/imgSignUp.png';
import Input from '../../components/Input';
import Button from '../../components/Button';




function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });
  //const navigate = useNavigate();



  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await client.post('/sign-up', formData);
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

  console.log(formData);

  const { firstName, lastName, email, password, phone } = formData;

  return <Container>
      <div className="container__img">
        <img src={img} alt="left description"/>
      </div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">
          Sign Up
        </h1>
        <p className="form__subtitle">
          Already have an account? <Link to="/sign-in">Sign In</Link> 
        </p>
        <div className="form__group">
          <Input name="firstName" label="First Name" type="text" value={firstName} placeholder="First Name" onChange={inputHandler} />
          <Input name="lastName" label="Last Name" type="text" value={lastName} placeholder="Last Name" onChange={inputHandler} />
          <Input name="phone" label="Enter phone" type="tel" value={phone} placeholder="Enter phone" onChange={inputHandler} />
          <Input name="email" label="Enter email" type="email" value={email} placeholder="Enter email" onChange={inputHandler} />
          <Input name="password" label="Enter password" type="password" value={password} placeholder="Enter password" onChange={inputHandler} />
          <Button title="Next step" type={'submit'} />
        </div>
      </form>
  </Container>;
}

export default SignUp;