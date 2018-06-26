import React from "react";


class App extends React.Component {

  render () {
    console.log('this is mounting!');

    return (
      <React.Fragment>
        <p>I'm the App!</p>
      </React.Fragment>
    );
  }
};

export default App;