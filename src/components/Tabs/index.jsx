import React, { useState } from "react";
import Container from "./style";

export const categories = [
  {
    type: "fiction",
    name: "Fiction",
    _id: 1,
  },
  {
    type: "non-fiction",
    name: "Non-fiction",
    _id: 2,
  },
  {
    type: "poem",
    name: "Poems",
    _id: 3,
  },
  {
    type: "classic",
    name: "Classic",
    _id: 4,
  },
  {
    type: "adventure",
    name: "Adventure",
    _id: 5,
  },
];

export const authorCategory = [
  {
    type: "poet",
    name: "Poet",
    _id: 1,
  },
  {
    type: "novelist",
    name: "Novelist",
    _id: 2,
  },
  {
    type: "satirist",
    name: "Satirist",
    _id: 3,
  },
  {
    type: "classic",
    name: "Classic",
    _id: 4,
  },
];

const categoryRender = (type, props) => {
  return type.map((cat) => (
    <li key={cat._id} onClick={() => props.categoryHandler(cat.type)}>
      {cat.name}
    </li>
  ));
};

const allTab = {
  _id: new Date(),
  type: "all",
  name: "All",
};

function Tabs(props) {
  const [select, setSelect] = useState(
    props.isAuthor ? [allTab, ...authorCategory] : [allTab, ...categories ]
  );

  const tabHandler = ( type ) => {
    // const filtered = select.filter(i => i.)
    props.categoryHandler()
  }

  return (
    <Container>
      <h2 className="tabs__title">Main categories</h2>
      <ul className="tabs__cat">
        {select.map((cat) => (
          <li key={cat._id} onClick={() => tabHandler(cat.type)}>
            {cat.name}
          </li>
        ))}
        {/* <li onClick={props.fetchAll}>All</li>
        {props.isAuthor
          ? categoryRender(authorCategory, props)
          : categoryRender(categories, props)} */}
      </ul>
    </Container>
  );
}

export default Tabs;
