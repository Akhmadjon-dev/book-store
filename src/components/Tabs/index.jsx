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
  isActive: true,
};

function Tabs(props) {
  const tabs = props.isAuthor
    ? [allTab, ...authorCategory]
    : [allTab, ...categories];
  const [select, setSelect] = useState(tabs);

  const tabHandler = (type) => {
    const filtered = select.map((i) =>
      i.type === type ? { ...i, isActive: true } : { ...i, isActive: false }
    );
    props.categoryHandler(type);
    setSelect(filtered);
  };

  return (
    <Container>
      <h2 className="tabs__title">Main categories</h2>
      <ul className="tabs__cat">
        {select.map((cat) => (
          <li
            key={cat._id}
            className={cat.isActive ? "tabs__li tabs__li--active" : "tabs__li"}
            onClick={() => tabHandler(cat.type)}
          >
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
