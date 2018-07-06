import React from 'react';
import styled, {css} from 'styled-components';
import KnobLevelPlateMark from '../KnobLevelPlateMark/KnobLevelPlateMark';

const KnobPlate909Styles = styled('div')`
    width:100px;
    height:100px;
    border-radius:5px;
    background:#e4e4db;
    position:relative;
  `;

class KnobPlate909 extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      mouseCoordsX: 0,
      mouseCoordsY: 0
    }
  }

  mouseMove(e){
    e.persist();
    this.setState(() => {
      return {mouseCoordsX: e.screenX, mouseCoordsY: e.screenY };
    });
  }

  render(){
    return (
      <KnobPlate909Styles onMouseMove={this.mouseMove.bind(this)}>
        <KnobLevelPlateMark rotation={45} top={49} left={31}/>
        <KnobLevelPlateMark rotation={125} top={49} left={71}/>
        {this.props.children(this.state)}
      </KnobPlate909Styles>
    );
  }
}

export default KnobPlate909;