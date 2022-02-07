import React, { Fragment, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import SignUp from './container/Auth/SignUp'
import SignIn from './container/Auth/SignIn'
import Home from './container/Home'
import Header from './components/Header'
import client from './utils/axios'
import Add from './container/Add'


function App() {
  const user = localStorage.getItem('user')

  useEffect(() => {
  
    getUsers()

    
  }, []);


  const getUsers = async () => {
    const res = await client.get('/users');
    console.log(res);
  }


  console.log(user);

  if(user){
    return (
      <Fragment>
        <Header />
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/form" element={<Add />} />
          <Route path="/not-found" element={<h3>Not Found</h3>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Fragment>
    )
  } else{
    return (
      <Fragment>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </Routes>
      </Fragment>
    )
  }
}
export default App
