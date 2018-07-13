import React from 'react';

const SynthContext = React.createContext({
  synthContext: {},
  knobOutput: () => {}
});

export default SynthContext;