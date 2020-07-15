// Function Expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("Dallin", "Humphrey"));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})("Kortney", "Humphrey");
//# sourceMappingURL=018_immediately_invoked.js.map