import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero  from '../components/Hero';
import Books from '../container/Books';
import Authors from '../container/Authors';
import client from "../utils/axios";


function Home() {

  const [searchData, setSearchData] = useState([])

  const searchHandler = async (value) => {
    try{
      const res = await client.get('/books/search/'+value)
      console.log('searched - ', res)
      setSearchData(res.data.payload)
    }
    catch (err) {
      setSearchData([])
      console.log(err)
    }
  }

  return (
    <div>
        <Hero searchHandler={ searchHandler } />
        <Routes>
          <Route path="/books" element={<Books data={ searchData }/>} />
          <Route path="/authors" element={<Authors />} />
        </Routes>

    </div>
  )
}

export default Home;
