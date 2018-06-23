import React from 'react';
import Home from '../components/Home';

function App(){


  return (
    <Switch>
      <Route path="/home" component={Home}/>
    </Switch>
  )


}