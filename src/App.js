// create your App component here
import React from 'react'

export default class App extends React.Component {

  state = {
    data: []
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
      data: json
    })
    })
  }

  render(){
    return(
      <div>whatever</div>
    )
  }
}
