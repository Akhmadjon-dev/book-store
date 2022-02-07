import React, { useState,  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from './styles/StySignUp';
import img from '../../assets/img/imgSignUp.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import client from '../../utils/axios';




function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate()
  
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

 

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await client.post('/login', formData);
      if(res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('token', res.data.token)
        
        // navigate('/', { replace: true });
        window.location = ('/')
      } 
      console.log(res);
    }
    catch (error){
      console.log(error)  
    }
  }

  const { email, password } = formData;

  return <Container>
      <div className="container__img">
        <img src={img} alt="left description"/>
      </div>
      <form onSubmit={submitHandler} className="form">
        <h1 className="form__title">
          Sign In
        </h1>
        <p className="form__subtitle">
          Don't you have an account? <Link to="/sign-up">Sign Up</Link> 
        </p>
        <div className="form__group">
          <Input name="email" label="Enter email" type="email" value={email} placeholder="Enter email" onChange={inputHandler} />
          <Input name="password" label="Enter password" type="password" value={password} placeholder="Enter password" onChange={inputHandler} />
          <Button title="Next step" type={'submit'} />
        </div>
      </form>
  </Container>;
}

export default SignIn;