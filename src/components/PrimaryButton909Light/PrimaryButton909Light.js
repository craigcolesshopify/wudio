import React from 'react';
import styled, {css} from 'styled-components';

function PrimaryButton909Light(props){
  const {on} = props;
  let shadow = '0';
  if(on) {
    shadow = '0px 0px 5px 1px rgba(253,41,66,0.7)';
  } 
  const PrimaryButton909LightStyled = styled('div') `
    width:15px;
    height:6px;
    background:#fd2942;
    position:relative;
    left: calc(50% - 7.5px);
    top:10px;
    box-shadow: ${shadow};
  `

  return (
    <PrimaryButton909LightStyled />
  )
}

export default PrimaryButton909Light;