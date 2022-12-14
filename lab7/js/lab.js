/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 24 October
 * License : Public Domain
 */

// sortUserName - a function that takes user input and sorts the letters of their sortUserName

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string into an array
  var nameArray = userName.split('');
  console.log("nameArray: ", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ", "</br>");
document.writeln("<div class = 'nametag'>", sortUserName(), "</div>");
