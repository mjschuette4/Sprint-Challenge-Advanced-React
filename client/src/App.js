import React from 'react';
import axios from "axios";
import NavBar from "./components/NavBar";
import CardCreator from "./components/CardCreator";
import './App.css';

export default class App extends React.Component {
  //Basic constructor with base state for players
  constructor() {
    super()
    this.state = { players: [] }
  }

  componentDidMount() {
    //just an axios fetching data from this url 
    axios
      .get('http://localhost:5000/api/players')
      //Setting the players array equal to  the data from this database
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