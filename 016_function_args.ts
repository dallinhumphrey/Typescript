// function printAddress(street: string, streetTwo?: string, state = "AZ") {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress("123 Any St");
// printAddress("123 Any St", "suit 540");
// printAddress("123 Any St", "Suit 560", "Utah");

function lineupCard(team: string, ...players: string[]) {
  console.log("Team: " + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard("Dragonlance", "Raistlin", "Caramon", "Takisis");
