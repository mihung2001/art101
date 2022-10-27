/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 26 October
 * License : Public Domain
 */

 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 console.log("My array ", numbers);

 function half(x){
   return (x / 2);
 };

//test substractOne
console.log("What is half of 8? ", half(8));
console.log("What is half of 94? ", half(94));

var result = numbers.map(half);
console.log("Test of halving an array: ", result);

var result = numbers.map(function(x){
  return x * 4;
});

console.log("4 times of an array: ", result);

var outputEl = document.getElementById("output");
outputEl.innerHTML = "mapResults"; // put your results here
