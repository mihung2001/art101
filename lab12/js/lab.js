/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 9 November
 * License : Public Domain
 */

function sortingHat(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 3) {
    return "Gryffindor"
  } else if (mod == 2) {
    return "Ravenclaw"
  } else if (mod == 1) {
    return "Slytherin"
  } else if (mod == 0) {
    return "Hufflepuff"
  };
};

$("#button").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + "<span id = 'house'>" + house + "</span>" + "</p>";
  $("#output").html(newText);
});
