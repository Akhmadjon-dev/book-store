import React from 'react';
import Container from './style';

export const categories = [
  {
    type: 'fiction',
    name: 'Fiction',
    _id: 1,
  },
  {
    type: 'non-fiction',
    name: 'Non-fiction',
    _id: 2,
  },
  {
    type: 'poem',
    name: 'Poems',
    _id: 3,
  },
  {
    type: 'classic',
    name: 'Classic',
    _id: 4,
  },
  {
    type: 'adventure',
    name: 'Adventure',
    _id: 5,
  },

];


function Tabs(props) {
  return <Container>
      <h2 className="tabs__title">Main categories</h2>
      <ul className="tabs__cat">
        {categories.map(cat => (
          <li key={cat._id} onClick={() => props.categoryHandler(cat.type)}>
            { cat.name }
          </li>
        ))}
      </ul>
  </Container>;
}

export default Tabs;
