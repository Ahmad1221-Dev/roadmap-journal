//----------------Incorrect Version-----------------

// function average(numbers) {
//   let total = 0;
//   for (let i = 0; i <= numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total / numbers.length;
// }
// console.log(average([10, 20, 30])); // should print 20
// console.log(average([]));           // should NOT print NaN

//-----------------correct version------------------

function average(numbers) {
    if(numbers.length === 0){return "Empty list! Average can't be found"};

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total/numbers.length;
}
console.log(average([10, 20, 30])); // should print 20
console.log(average([]));           // should NOT print NaN