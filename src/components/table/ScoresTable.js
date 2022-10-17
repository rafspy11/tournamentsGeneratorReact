import React from "react";

class ScoresTable extends React.Component {
  render() {
    const teams = this.props.teams;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Lp.</th>
            <th>Drużyna</th>
            <th>Mecze</th>
            <th>Punkty</th>
            <th>Bramki zdobyte</th>
            <th>Bramki stracone</th>
            <th>+/-</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{team.name}</td>
                <td>{team.games}</td>
                <td>{team.points}</td>
                <td>{team.bs}</td>
                <td>{team.bl}</td>
                <td>{team.bs - team.bl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ScoresTable;
