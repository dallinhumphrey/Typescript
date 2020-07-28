function profile(user) {
    return "Welcome, " + user.firstName + " " + user.lastName;
}
var realUser = {
    email: "test@Test.com",
    firstName: "Dallin",
    lastName: "Humphrey"
};
console.log(profile(realUser));
console.log(realUser.email);
//# sourceMappingURL=023_interfaces.js.map