import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero  from '../components/Hero';
import Search from '../components/Search';
import Books from '../container/Books';
import Authors from '../container/Authors';


function Home() {

  return (
    <div>
        <Hero />
        <Search />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
    </div>
  )
}

export default Home;
