@detailedLog("billing")
class AccountsPayable {
  constructor() {}
}

function detailedLog(dashboard: string) {
  if (dashboard == "billing") {
    console.log("Working in the billing department");
    return function (target: Object) {};
  } else {
    return function (target: Object) {};
  }
}
