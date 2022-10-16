import React from "react";

class GamesList extends React.Component {

  generateRounds(teams) {
    let numberOfRounds = teams.length - 1;
    let scheduleArray = [];

    for (let i = 0; i < numberOfRounds; i++) {
      let roundArray = [];

      for (let j = 0; j < teams.length / 2; j++) {
        roundArray.push([teams[j].id, teams[teams.length - 1 - j].id]);
      }

      teams.splice(1, 0, teams[teams.length - 1]);
      teams.pop();

      scheduleArray.push(roundArray);
    }

    return scheduleArray;
  }

  render() {
    const scheduleArr = this.generateRounds(this.props.teams);
    console.log(scheduleArr);
    return "";
  }
}

export default GamesList;
