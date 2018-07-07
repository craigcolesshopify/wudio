import React from 'react';
import KnobPlate909 from '../components/KnobPlate909/KnobPlate909';

import Knob909 from '../components/Knob909/Knob909';

function About(){


  function knobOutput(value, control) {
    console.log(value, control);
  }
  
  return (
    <div>
      <h1>ABOUT!!</h1>
      <KnobPlate909>
        {
          (state)=><Knob909 values={state} output={knobOutput} control="envelope"/>
        }
      </KnobPlate909>
      <KnobPlate909>
        {
          (state)=><Knob909 values={state} output={knobOutput} control="cutoff"/>
        }
      </KnobPlate909>
    </div>
  )
  
}

export default About;