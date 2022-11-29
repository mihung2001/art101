/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 28 November
 * License : Public Domain
 */

 // Using the core $.ajax() method
var comicObj = $.ajax({
                   // The URL for the request (from the api docs)
                   url: "https://xkcd.com/info.0.json",
                   // The data to send (will be converted to a query string)
                   crossDomain: true,
                   data: {
                           // here is where any data required by the api
                           //   goes (check the api docs)
                           // id: 123,
                           // api_key: "blahblahblah",
                         },
                   // Whether this is a POST or GET request
                   type: "GET",
                   // The type of data we expect back
                   dataType : "json",
                   // What do we do when the api call is successful
                   //   all the action goes in here
                   success: function(data) {
                       // do stuff
                       $("#output").html("<h3>" + comicObj.title + "</h3>");
                       $("#output").html("<img src=" + comicObj.img + "alt =" + comicObj.alt + ">");
                       console.log(data);
                   },
                   // What we do if the api call fails
                   error: function (jqXHR, textStatus, errorThrown) {
                       // do stuff
                       console.log("Error:", textStatus, errorThrown);
                   }
               })
