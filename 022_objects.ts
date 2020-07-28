var realUser = {
  email: "test@test.com",
  firstName: "Dallin",
  lastName: "Humphrey",
  sayHi() {
    return "Hey there!";
  },
  sayBye() {
    return "Bye bye now!";
  },
};

console.log(realUser.email);
console.log(realUser.firstName);
console.log(realUser.lastName);
console.log(realUser.sayHi());
console.log(realUser.sayBye());
