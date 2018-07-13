import React from 'react';

class SynthEngine extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      knobOutput: this.knobOutput,
      context: this
    }

  }

  setAudioContext(){

    try {
      window.AudioContext = window.AudioContext||window.webkitAudioContext;
      
      this.audioContext = new AudioContext();

      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.connect(this.audioContext.destination);
      this.oscillator.start();
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
    console.log(this);
    return this.props.children(this.state);
  }
}

export default SynthEngine;