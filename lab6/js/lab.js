/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 20 October
 * License : Public Domain
 */

 // Define variables
 myTransport = [ "car", "train", "bus", "plane", "boat" ];

 myMainRide = {
   make: "Dodge",
   model: "Charger",
   color: "Black",
   year: "2022",
   age: function() {
     return 2022 - age;
   }
 }

 // Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
