// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

  state = {data: []}

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then((spaceOnJson) => {
      this.setState({
        spaceOnJson
        })
      }
    )
  }

  render(){
    return <div>{this.state.spaceOnJson}</div>
  }
}
