// functions have access to any public variables in the outer scope
// function nameFunction(name: string): void {
//   var n: string = name;
//   function printName() {
//     console.log(n);
//   }
//   printName();
// }
// nameFunction("Dallin");
// The inner function maintain access to the outer scope even AFTER the values are returned!
function nameFunction(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var nameAgain = nameFunction("Kort");
nameAgain();
//# sourceMappingURL=019_closures.js.map