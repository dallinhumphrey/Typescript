function printAddress(street: string, streetTwo?: string) {
  console.log(street);
  if (streetTwo) {
    console.log(streetTwo);
  }
}

printAddress("123 Any St");
printAddress("123 Any St", "suit 540");
