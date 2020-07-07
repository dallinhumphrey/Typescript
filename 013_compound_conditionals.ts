let email: string = "test@test.com";
let password: string = "asdfasdf";

if (password == "asdfasd" && email == "test@test.com") {
  console.log("Password is correct");
} else {
  console.log("Permission denied");
}

if (password == "asdfasdf" || password == ";lkj;lkj") {
  console.log("Password is correct");
} else {
  console.log("Permission denied");
}

if (!(email != "test@test.com")) {
  console.log("You are granted access!");
}
