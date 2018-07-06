import React from 'react';
import styled, {css} from 'styled-components';

const KnobPlate909Styles = styled('div')`
    width:100px;
    height:100px;
    border-radius:5px;
    background:#e4e4db;
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
        {this.props.children(this.state)}
      </KnobPlate909Styles>
    );
  }
}

export default KnobPlate909;