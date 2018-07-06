import React from 'react';
import KnobPlate909 from '../components/KnobPlate909/KnobPlate909';
import Knob909 from '../components/Knob909/Knob909';
function About(){
  
  return (
    <div>
      <h1>ABOUT!!</h1>
      <KnobPlate909>
        {
          (state)=><Knob909 values={state} />
        }
      </KnobPlate909>
    </div>
  )
  
}

export default About;