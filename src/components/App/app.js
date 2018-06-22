import React from 'react';

function App(){


  return (
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
  )


}