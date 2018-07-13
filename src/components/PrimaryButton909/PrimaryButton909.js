import React from 'react';
import PrimaryButton909Light from '../PrimaryButton909Light/PrimaryButton909Light';
import styled, {css} from 'styled-components';

const PrimaryButton909Styled = styled('div')`
    width:50px;
    height:50px;
    border-radius:5px;
    background:#96b0ba;
    border:2px solid #202928;
    position:relative;
  `;

class PrimaryButton909 extends React.Component {

  constructor(props){
    super(props);
    this.onUp = this.onUp.bind(this);
    this.state = {
      on: false
    }
  }

  onUp(e){
    this.setState((prevState)=>{
      return {on:!prevState.on}
    });
  }

  render(){
    return (
      <PrimaryButton909Styled onPointerUp={this.onUp}>
        <PrimaryButton909Light on={this.state.on}/>
      </PrimaryButton909Styled>
    )
  }

}

export default PrimaryButton909;