interface User {
  email: string;
  firstName: string;
  lastName: string;
}

function profile(user: User): string {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
  email: "test@Test.com",
  firstName: "Dallin",
  lastName: "Humphrey",
};

console.log(profile(realUser));
console.log(realUser.email);
