function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = "AZ"; }
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
}
printAddress("123 Any St");
printAddress("123 Any St", "suit 540");
printAddress("123 Any St", "Suit 560", "Utah");
//# sourceMappingURL=016_function_args.js.map