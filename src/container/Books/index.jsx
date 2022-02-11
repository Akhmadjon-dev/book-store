import React, {useState, useEffect} from 'react';
import Tabs from '../../components/Tabs';
import client from "../../utils/axios";
import noPhoto from "../../assets/img/no-photo.jpg";
import Container from './style';

function Books() {

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

  console.log("books", books)
  return <Container>

      <Tabs />
      <h2>books</h2>
      <div className="cards">
        {
          books.map(book => (
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

