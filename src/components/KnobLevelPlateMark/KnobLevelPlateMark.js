import React from 'react';
import styled, {css} from 'styled-components';

function KnobLevelPlateMark(props){
  
  const {rotation, top, left} = props;
  
  const KnobLevelPlateMark = styled('div')`
    width:2px;
    height:25px;
    background:#55627e;
    position:absolute;
    top:${top}px;
    left:${left}px;
    transform:rotate(${rotation}deg);
  `

  return (
    <React.Fragment>
      <KnobLevelPlateMark />
    </React.Fragment>
    
  );
}

export default KnobLevelPlateMark;