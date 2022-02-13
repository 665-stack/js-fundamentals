// That is how to know specific index from elements. And remember, index start from 0, not 1. 
var bookNames = ['Hablu', 'Bangla', 'English', 'Math', 'Accounting', 'Finence'];
var bookNumbers = bookNames.indexOf('Accounting');
console.log(bookNumbers);
// another one example 
var age = [17, 24, 45, 50, 20, 34, 21, 25, 78, 90];
var ageNumber = age.indexOf(34);
console.log(ageNumber);
// That is how to know specific elements from index number. Hey, also remember, index start from 0, not 1.
var friendsNames = ['Junayed', 'Naim', 'Rayhan', 'Sadikul', 'opurbo'];
var indexNames = friendsNames[3];
console.log(indexNames);
// If I wanna to change 
var friendsMoney = [234, 100, 200, 150, 170, 365, 203, 220];
console.log(friendsMoney);
// when I change elements
friendsMoney[1] = 110;
friendsMoney[3] = 160;
console.log(friendsMoney);


