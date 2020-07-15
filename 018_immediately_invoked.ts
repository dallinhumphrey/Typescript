var names: string[] = ["Dallin", "Kort", "Link", "lily"];
var counter: number = 0;

(function () {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);
