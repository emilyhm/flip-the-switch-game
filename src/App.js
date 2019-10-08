import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightBulb: true,
    }
  }

  changeBackground = (className, color) => {
    document.querySelector(className).style.backgroundColor = color
  }

  turnOff = () => {
    this.changeBackground(".main", "black")
    this.setState({
      showLightBulb: false
    })
  };

  turnOn = () => {
    this.changeBackground(".main", "white")
    this.setState({
      showLightBulb: true
    })
  };

  render() {
    return (
      <div className="main">
        <h1 className="title">Flip the Switch!</h1>
        <div className="buttons">
          <button onClick= {this.turnOn} id="on" type="button">On</button>
          <button onClick= {this.turnOff} id="off" type="button">Off</button>
        </div>
        {this.state.showLightBulb && (
          <a className="light">
            <img className="img" src="https://www.freepngimg.com/thumb/light/78179-portable-light-photography-network-incandescent-graphics-bulb.png" alt="light bulb" />
          </a>
        )}

      </div>
    );
  }
}

export default App;
