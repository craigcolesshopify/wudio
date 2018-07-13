import React from 'react';
import SynthContext from '../../contexts/SynthContext/SynthContext';

class SynthEngine extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      knobOutput: this.knobOutput,
      synthContext: this
    }

  }

  setAudioContext(){

    try {
      window.AudioContext = window.AudioContext||window.webkitAudioContext;
      
      this.audioContext = new AudioContext();

      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.connect(this.audioContext.destination);
      this.oscillator.start();
      setTimeout(()=>{this.oscillator.stop()},4000);
      this.oscillator.frequency.value = 400;

      

    } catch(e){
      throw new Error('Browser does not support web audio');
    }
  }

  componentDidMount(){
    this.setAudioContext();
  }

  knobOutput(value, control, context){
    console.log(value, control, context);
    if(context && context.oscillator){
      context.oscillator.frequency.value = value;
    }
    //console.log(this);
  }

  render(){
    
    return ( 
      <SynthContext.Provider value={this.state}>
        {this.props.children}
      </SynthContext.Provider>
    )
  }
}

export default SynthEngine;