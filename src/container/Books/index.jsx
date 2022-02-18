import React, {useState, useEffect} from 'react';
import Tabs from '../../components/Tabs';
import client from "../../utils/axios";
import noPhoto from "../../assets/img/no-photo.jpg";
import Container from './style';

function Books(props) {
  console.log(props.data);
  const [books, setBooks] = useState([])

    useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      const res = await client.get('/books')
        if(res.status === 200) {
          setBooks(res.data.payload.docs)
        }
    }

    catch (err) {
      console.log(err)
    }
  }

  const categoryHandler = async (type) => {
    try{
      const res = await client.get('/books/filter/'+type)
      console.log('category', res)
      setBooks(res.data.payload)
    }
    catch (err) {
      console.log(err)
    }
  }

  console.log("books", books)
  return <Container>

      <Tabs categoryHandler={ categoryHandler } fetchAll={ getBooks }/>
      <div className="cards">
        {
          (props.data.length ? props.data : books).map(book => (
            <div className="card" key={book._id}>
              <img src={noPhoto}/>
              <h4 className="card__title">{book.title}</h4>
              <p className="card__author">{`${book.author.firstName} ${book.author.lastName}`}</p>
            </div>
          ))
        }
      </div>
  </Container>;
}

export default Books;

