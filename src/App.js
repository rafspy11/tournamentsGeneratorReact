import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

import GamesList from './components/games/GamesList';
import ScoresTable from './components/table/ScoresTable';
import {teamsData} from './data/teams/TeamsData';

class App extends React.Component {
  state = {
    teams: [
      {
        id: 1,
        name: "Polska",
        games: 0,
        points: 0,
        bs: 0,
        bl: 0,
      },
      {
        id: 2,
        name: "Senegal",
        games: 0,
        points: 0,
        bs: 0,
        bl: 0,
      },
      {
        id: 3,
        name: "Kolumbia",
        games: 0,
        points: 0,
        bs: 0,
        bl: 0,
      },
      {
        id: 4,
        name: "Japonia",
        games: 0,
        points: 0,
        bs: 0,
        bl: 0,
      },
    ]
  };

  render() {
    const games = <GamesList teams={this.state.teams} />
    const table = <ScoresTable teams={this.state.teams} />
    return (
      <section className="my-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              {games}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              {table}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default App;