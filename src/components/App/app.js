import React from 'react';
import Header from '../Header/Header';
import About from '../../pages/About';
import Home from '../../pages/Home';
import {Route} from 'react-router-dom';

class App extends React.Component {

  render () {
    console.log('this is mounting!!! ');

    return (
      <div>
        <Header />
        <Route path='/about' exact component={About} />
        <Route path='/' exact component={Home} />
      </div>
    );
  }
};

export default App;