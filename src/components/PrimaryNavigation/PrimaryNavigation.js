import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import PrimaryLink from '../PrimaryLink/PrimaryLink';

function PrimaryNavigation(props){
  const List = styled('ul')`
    list-style-type: none;
  `;

  const ListItem = styled.li`
    display:inline-block;
  `;


  return (
    <nav>
      <List>
        <ListItem><PrimaryLink to="/">Home</PrimaryLink></ListItem>
        <ListItem><PrimaryLink to="/about">About</PrimaryLink></ListItem>
      </List>
    </nav>
  )
}

export default PrimaryNavigation;