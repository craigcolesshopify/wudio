import React from 'react';
import styled, {css} from 'styled-components';

function KnobLevelPlateMark(props){
  
  const {rotation, top, left, backgroundColor, width, height} = props;
  const styleDefaults = {
    width: width ? width : 1,
    height: height ? height : 25,
    backgroundColor: backgroundColor ? backgroundColor : '#000',
  }
  const KnobLevelPlateMark = styled('div')`
    width:${styleDefaults.width}px;
    height:${styleDefaults.height}px;
    background:${styleDefaults.backgroundColor};
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