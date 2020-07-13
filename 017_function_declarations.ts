console.log(fullName("Dallin", "Humphrey"));
// console.log(otherFullName("Dallin", "Humphrey"));
// console.log(thirdFullName("Dallin", "Humphrey"));

// Function declaration
function fullName(first: string, last: string): string {
  return first + " " + last;
}

// Function expression
var otherFullName: (first: string, last: string) => string;

otherFullName = function (first: string, last: string) {
  return first + " " + last;
};

var thirdFullName: (first: string, last: string) => string = function (
  first: string,
  last: string
) {
  return first + " " + last;
};
