import React from 'react';
import Container from './style';

function Tabs() {
  return <Container>
      <h2 className="tabs__title">Main categories</h2>
      <ul className="tabs__cat">
        <li>Fiction</li>
        <li>Non-fiction</li>
        <li>Poems</li>
        <li>Documentaries</li>
        <li>Essays</li>
      </ul>
  </Container>;
}

export default Tabs;
