import React from 'react';
import SynthEngine from '../components/SynthEngine/SynthEngine';
import KnobPlate909 from '../components/KnobPlate909/KnobPlate909';

import Knob909 from '../components/Knob909/Knob909';

function About(){

  return (
    <div>
      <h1>ABOUT!!</h1>
      <SynthEngine>
        <React.Fragment>
          <KnobPlate909>
            {
              (state, knobOutput, synthContext) => (
                <Knob909 values={state} output={knobOutput} control="envelope" synthContext={synthContext}/>
              )
            }
          </KnobPlate909>

          <KnobPlate909>
            {
              (state, knobOutput, synthContext) => (
                <Knob909 values={state} output={knobOutput} control="envelope" synthContext={synthContext}/>
              )
            }
          </KnobPlate909>
        </React.Fragment>
      </SynthEngine>
    </div>
  )
  
}

export default About;