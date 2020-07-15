// functions have access to any public variables in the outer scope
// function nameFunction(name: string): void {
//   var n: string = name;
//   function printName() {
//     console.log(n);
//   }
//   printName();
// }
// nameFunction("Dallin");
// ***********************************
// The inner function maintain access to the outer scope even AFTER the values are returned!
// function nameFunction(name: string) {
//     var n: string = name;
//     return function () {
//         console.log(n);
//     };
// }
// var nameAgain = nameFunction("Kort");
// nameAgain();
// ***********************************
function lineup() {
    var nowFighting = 1;
    return {
        nextFighter: function () {
            nowFighting++;
        },
        currentFighter: function () {
            return nowFighting;
        }
    };
}
var fighters = lineup();
console.log(fighters.currentFighter());
fighters.nextFighter();
console.log(fighters.currentFighter());
fighters.nextFighter();
console.log(fighters.currentFighter());
fighters.nextFighter();
console.log(fighters.currentFighter());
var mage = lineup();
console.log(mage.currentFighter);
//# sourceMappingURL=019_closures.js.map