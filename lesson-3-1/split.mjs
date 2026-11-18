let billPaisa = 1001; // 500 paisa = 5 rupees
let gstPercent = 18;
let tipPercent = 10;
let people = 5;

let GST = (billPaisa * gstPercent) / 100;
let tip = (billPaisa * tipPercent) / 100;

let totalBill = Math.floor(billPaisa + GST + tip);
let perPerson = Math.floor(totalBill / people);

const formatter = new Intl.NumberFormat('en-PK', {
  style: 'currency',
  currency: 'PKR',
  minimumFractionDigits: 2,
});

people <= 0
  ? console.log('No people to split the bill. Enter Valid Value')
  : (
    console.log(`Total Bill: ${formatter.format(totalBill / 100)}`),
    console.log(`Per Person (${people}): ${formatter.format(perPerson / 100)}`),
    console.log(
      `Person 1 should pay additional ${formatter.format((totalBill % people) / 100)} to cover the total bill.`,
    ));

// console.log(0.1 + 0.2); //0.29999...
// console.log('5' + 5); //55
// console.log('5' - 5); //0
// console.log(true + 1); //2
// console.log([] + []); //0    Wrong, it should be an empty string - Because if both are strings, then concatenation will take priority.
// console.log(typeof null); //object
// console.log(NaN === NaN); //false
// console.log('b' + 'a' + +'a' + 'a'); //error Wrong, Because +'a' will coerce via uniry plus operator to number and evaluate to NaN, And afterwards, NaN would act as string, so the result will be 'ba  NaN  a'
// console.log(null ?? 'default', 0 ?? 'default', 0 || 'default'); //default 0 default
// console.log(10 > 9 > 0); //true
