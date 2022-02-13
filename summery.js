// we can write many elements inside one var. and it's call Array
var tourDestinations = ['shajek', 'nepal', 'india', 'japan', 'germany', 'switzerland']
console.log(tourDestinations);
// we can see index number from elements
// tourDestinations.indexOf('japan');
console.log(tourDestinations.indexOf('japan'));
// we can see elements from index number
var fourthDestination = tourDestinations[4];
console.log(fourthDestination);
// we can change elements insted of elements
tourDestinations[2] = "South Korea";
console.log(tourDestinations);
// and we can add and kicked out more elements
tourDestinations.push('london');
tourDestinations.push('singapur');
console.log(tourDestinations);
tourDestinations.pop();
tourDestinations.pop();
console.log(tourDestinations);

// we can use if, else if, else 
// mane tourDestinations er index 4 number e jhodi germany thake taile germany jabo
if (tourDestinations[4] == 'germany') {
    console.log('I will go to germany for study purpose.')
}
else if (tourDestinations[1] == 'china') {
    console.log('I will go to chine, is her element number is 1.')
}
else if (tourDestinations.length == 4) {
    console.log('No problem bro. I have lot of money. I wanna go more country.')
}
else {
    console.log("I can't go somewhere. I'm poor.")
}
// experinment
var eggPrice = 32;
var myBudget = 32;
if (myBudget > eggPrice) {
    console.log('I wanna eat a one egg')
}
if (myBudget <= eggPrice) {
    console.log('I wanna eat egg with orange')
}
if (myBudget >= eggPrice) {
    console.log('I wanna eat one egg with solt')
}
