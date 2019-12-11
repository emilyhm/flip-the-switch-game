import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightBulb: true,
    }
  };

  // this function chnages the background color 
  changeBackground = (className, color) => {
    document.querySelector(className).style.backgroundColor = color
  };

  //this function changes the background color to black using 'changeBackground', and also updates state to false (hiding the lightbulb)
  turnOff = () => {
    this.changeBackground(".main", "black")
    this.setState({
      showLightBulb: false
    })
  };

  //this function changes the background color to white (changeBackground) and updates state to true (showing the lightbulb)
  turnOn = () => {
    this.changeBackground(".main", "white")
    this.setState({
      showLightBulb: true
    })
  };

  render() {
    return (
      <main className="main">
        <h1 className="title">Flip the Switch!</h1>
        <div className="buttons">
          <button onClick= {this.turnOn} id="on" type="button">On</button>
          <button onClick= {this.turnOff} id="off" type="button">Off</button>
        </div>
        {this.state.showLightBulb && (
          <img className="img" src="https://www.freepngimg.com/thumb/light/78179-portable-light-photography-network-incandescent-graphics-bulb.png" alt="light bulb" />
        )}
      </main>
    );
  }
}

export default App;
