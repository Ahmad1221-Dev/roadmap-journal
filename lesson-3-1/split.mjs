let billPaisa = 1001; // 500 paisa = 5 rupees
let gstPercent = 18;
let tipPercent = 10;
let people = 5;

// let people = 3;

// let people = 4;

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
  : (console.log(`Total Bill: ${formatter.format(totalBill / 100)}`),
    console.log(`Per Person (${people}): ${formatter.format(perPerson / 100)}`),
    console.log(
      `Person 1 should pay additional ${formatter.format((totalBill % people) / 100)} to cover the total bill.`,
    ));
