/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 7 November
 * License : Public Domain
 */

$("#challenges").append("<button id = 'challenges-button'>Press Me</button>");

$("#challenges-button").click(function(){
  $("#challenges").toggleClass('special-challenges');
});

$("#problems").append("<button id = 'problems-button'>Press Me</button>");

$("#problems-button").click(function(){
  $("#problems").toggleClass('special-problems');
});

$("#results").append("<button id = 'results-button'>Press Me</button>");

$("#results-button").click(function(){
  $("#results").toggleClass('special-results');
});
