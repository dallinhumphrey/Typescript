// Boolean
let paidAccount: boolean = true;

// Number
let age: number = 33;
var taxRate: number = 7.5;

// String
var fullName: string = "Dallin Humphrey";

// Array
var ages: number[] = [33, 28, 11];

// Tuple
let player: [number, string];
player = [3, "Humphrey"];

// Enum AWESOME!!!!
enum ApprovalStatus {
  Approved,
  Pending,
  Rejected,
}
let job: ApprovalStatus = ApprovalStatus.Pending;

// Any works only with any specifically.
var apiData: any[] = [123, "Dallin", false];

// Void use when using actions but no value
function printOut(msg: string): void {
  console.log(msg);
}
