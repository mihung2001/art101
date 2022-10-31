/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 31 October
 * License : Public Domain
 */

let outputEl = document.getElementById('output');

let new1El = document.createElement("p");

new1El.setAttribute("class", "empty");

let new2El = document.createElement("h3");

new2El.setAttribute("id", "random2");

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

new1El.innerHTML = 'Hello there!'

new2El.innerHTML = 'See you later!'
