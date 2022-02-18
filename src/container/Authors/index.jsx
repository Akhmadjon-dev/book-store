import React, { useState, useEffect } from "react";
import Tabs from "../../components/Tabs";
import client from "../../utils/axios";
import noPhoto from "../../assets/img/no-photo.jpg";
import Container from "./style";
import { ImBook } from 'react-icons/im';
import { ImHeadphones } from 'react-icons/im';

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = async () => {
    try {
      const res = await client.get("/authors");
      if (res.status === 200) {
        console.log("author  list -", res);
        setAuthors(res.data.payload);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const categoryHandler = async (type) => {
    try{
      const res = await client.get('/authors/filter/'+type)
      console.log('category', res)
      setAuthors(res.data.payload)
    }
    catch (err) {
      console.log(err)
    }
  }

  const showYear = (year) => new Date(year).getFullYear();
  

  return (
    <Container>
      <Tabs isAuthor categoryHandler = { categoryHandler } fetchAll = { getAuthors }/>

      <div className="cards">
        {authors.map((author) => (
          <div className="card" key={author._id}>
            <img src={noPhoto} />
            <p className="card__author">{`${author.firstName} ${author.lastName}`}</p>
            <p className="card__author-dates">{`${showYear(author.date_of_birth)}-${showYear(author.date_of_death)}`}</p>
            <div className="card__media">
              <p><ImBook /> 32</p>
              <p><ImHeadphones /> 17</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Authors;
