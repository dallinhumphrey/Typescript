var dbQuery = function (): void {
  setTimeout(() => {
    console.log("Query results");
  }, 3000);
};

function loadPage(q: () => void) {
  console.log("Header");
  q();
  console.log("Sidebar");
  console.log("Footer");
}

loadPage(dbQuery);

// a higher order function is a function that takes a call back as an arguement.
