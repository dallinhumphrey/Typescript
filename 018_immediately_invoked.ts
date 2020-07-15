var fullName: (first: string, last: string) => string;

fullName = function (first: string, last: string) {
  return first + " " + last;
};

console.log(fullName("Dallin", "Humphrey"));
