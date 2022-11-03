/*
 * Author: Huy Nguyen & Andrew Cho
 * Created: 2 November
 * License : Public Domain
 */
document.getElementById("my-button").addEventListener("click", sortUserName);

 function sortUserName() {
   var userName = document.getElementById("user-name").value;
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

   document.getElementById("output").innerHTML = "Your fixed name is: " + nameSorted;
 }
