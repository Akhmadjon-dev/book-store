import React, { useState, useEffect } from "react";
import Tabs from "../../components/Tabs";
import client from "../../utils/axios";
import noPhoto from "../../assets/img/no-photo.jpg";
import Container from "./style";

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

  const showYear = (year) => new Date(year).getFullYear();
  

  return (
    <Container>
      <Tabs />

      <div className="cards">
        {authors.map((author) => (
          <div className="card" key={author._id}>
            <img src={noPhoto} />
            <p className="card__author">{`${author.firstName} ${author.lastName}`}</p>
            <p className="card__author-dates">{`${showYear(author.date_of_birth)}-${showYear(author.date_of_death)}`}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Authors;
