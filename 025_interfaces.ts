interface User {
  email: string;
  firstName?: string;
  lastName?: string;
}

class Admin {
  role: string;
  constructor(public email: string) {
    this.role = "Admin";
  }
}

function profile(user: User): string {
  return `Welcome, ${user.email}`;
}

var joe = new Admin("joe@example.com");
console.log(joe.role);
