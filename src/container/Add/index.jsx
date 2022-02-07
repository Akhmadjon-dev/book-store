import React, { useState } from 'react';
import BookAdd from './Book';
import AuthorAdd from './Author';

function Add() {
    const [toggle, setToggle] = useState('book');
  return <div>
      <button>
        <span onClick={() => setToggle('book')}>Book</span>
      </button>
      <button>
        <span onClick={() => setToggle('author')}>Author</span>
      </button>



        {toggle === 'book' && <BookAdd />}
        {toggle === 'author' && <AuthorAdd />}


  </div>;
}

export default Add;
