import React from 'react';

class SynthEngine extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      knobOutput: this.knobOutput
    }
    this.setAudioContext();

  }

  setAudioContext(){
    
    window.AudioContext = window.AudioContext||window.webkitAudioContext;

    try {

      
      this.audioContext = new AudioContext();

      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.connect(this.audioContext.destination);
      //this.oscillator.start();

    } catch(e){
      throw new Error('Browser does not support web audio');
    }
  }

  knobOutput(value, control){
    console.log(value, control);
    //this.oscillator.frequency.value = value;
    console.log(this);
  }

  render(){
    console.log(this);
    return this.props.children(this.state);
  }
}

export default SynthEngine;