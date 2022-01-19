import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import apiClient from "../../utils/axios";

export default function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    lang: 'uz',
    image: 'https://www.computerhope.com/jargon/g/guest-user.jpg',
    // address: '',
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
      
      
  }, []);

  onsubmit = (e) => {
    e.preventDefault();
    apiClient.post("/sign-up", user).then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
    }).catch((err) => {
        console.log(err);
    });
    };


    return (
      <div>
        <form>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            label="First Name"
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            label="Last Name"
          />
          <Input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            label="Phone"
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            label="Email"
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            label="Password"
          />
          {/* <Input
            type="text"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleChange}
            label="Address"
            /> */}
          <button type="submit">
              Sign Up
          </button>
        </form>
      </div>
    );
  };

