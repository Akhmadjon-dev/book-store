import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero  from '../components/Hero';
import Search from '../components/Search';
import Books from '../container/Books';
import Authors from '../container/Authors';
import client from "../utils/axios";


function Home() {

  const [searchData, setSearchData] = useState()

  const searchHandler = async (value) => {
    try{
      const res = await client.get('/books/filter/'+value)
      console.log('category', res)
      setSearchData(res.data.payload)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
        <Hero  />
        <Search searchHandler={searchHandler} />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
    </div>
  )
}

export default Home;
