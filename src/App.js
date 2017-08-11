import React, { Component } from 'react';
import './App.css';

const inputColors = ['red', 'yellow', 'green']

const SingleLight = ({color, isActive}) => (
  <div className={"light" + (isActive ? ' active' : '')} style={{
    backgroundColor: color,
  }} />
)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.switchLight(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  switchLight(){
    //move active light up by 1
    console.log(this.state.activeIndex)
    this.setState({activeIndex: (this.state.activeIndex - 1 + inputColors.length) % inputColors.length})
  }

  render() {
    let lightBox = this;
    const singleLights = inputColors.map(function(color, i){
      return (
        <SingleLight color={color} key={i} isActive={i === lightBox.state.activeIndex} />
      )
    })

    return (
      <div className="container">
        <div className="light-box">
          {singleLights}
        </div>
      </div>
    );
  }
}

export default App;
