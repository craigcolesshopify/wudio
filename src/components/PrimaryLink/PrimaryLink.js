import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';




function PrimaryLink(props){
  
  const PrimaryLink = styled(Link)`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
  `;

  return (
    <PrimaryLink {...props}>{props.children}</PrimaryLink>
  )


}

export default PrimaryLink;

