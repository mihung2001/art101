/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 14 November
 * License : Public Domain
 */

function fizzBuzzBoom() {
  // create a list element in the div with the id "output":
  $("#output").html("<ul id = 'list'></ul>");
  // for each number, 1 to 200:
  for (let i = 1; i <= 200; i++) {
    // if the number is is a multiple of 3, 5, and/or 7:
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      // if the number is a multiple of all 3 factors:
      $("#list").append("<li>" + i + " - FizzBuzzBoom!" + "</li>");
    } else if (i % 3 == 0 && i % 5 == 0) {
      // if the number is a multiple of 3 and 5:
      $("#list").append("<li>" + i + " - FizzBuzz!" + "</li>");
    } else if (i % 5 == 0 && i % 7 == 0) {
      // if the number is a multiple of 7 and 5:
      $("#list").append("<li>" + i + " - BuzzBoom!" + "</li>");
    } else if (i % 3 == 0 && i % 7 == 0) {
      // if the number is a multiple of 3 and 7:
      $("#list").append("<li>" + i + " - FizzBoom!" + "</li>");
    } else if (i % 3 == 0) {
      // if the number is a multiple of 3:
      $("#list").append("<li>" + i + " - Fizz!" + "</li>");
    } else if (i % 5 == 0) {
      // if the number is a multiple of 5:
      $("#list").append("<li>" + i + " - Buzz!" + "</li>");
    } else if (i % 7 == 0) {
      // if the number is a multiple of 7:
      $("#list").append("<li>" + i + " - Boom!" + "</li>");
    } else {
      // if the number is not a multilple of any of the factors:
      $("#list").append("<li>" + i + "</li>");
    }
  }
}

fizzBuzzBoom();
