function printAddress(street: string, streetTwo?: string, state = "AZ") {
  console.log(street);
  if (streetTwo) {
    console.log(streetTwo);
  }
  console.log(state);
}

printAddress("123 Any St");
printAddress("123 Any St", "suit 540");
printAddress("123 Any St", "Suit 560", "Utah");
