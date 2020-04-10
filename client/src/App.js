import React from 'react';
import axios from "axios";
import NavBar from "./components/NavBar";
import CardCreator from "./components/CardCreator";
import './App.css';

export default class App extends React.component {
  constructor() {
    super()
    this.state = { players: [] }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res)
        this.setState({...this.state, players: res.data})
      })
  }

  render() {
    return (
      <div>
        <NavBar />
          {this.state.players.map( (player) => {
            return (
              <CardCreator key={player.id} player={player} />
            )
          })}
      </div>
    )
  }
}