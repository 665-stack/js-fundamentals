var danishPrice = 50;
var breadPrice = 20;
var biscutPrice = 10;
var teaPrice = 15;
var myBudget = 100;

if (myBudget > danishPrice) {
    console.log('I want to try one danish')
}
// ekhaner else if mane, jodi amer if er shorto poron na hoy taile ki hove. jodi shorto poron na hoy taile er porer else if er shorto poron hoy kina dhakbe.
else if (myBudget > breadPrice) {
    console.log('Then I wanna try bread')
}
else if (myBudget > biscutPrice) {
    console.log('biscut khamo')
}
else {
    console.log('batash khete hove')
}

// some advance topic!! we can use if inside if 
var cococolaPrice = 30;
var onetimeBreadPrice = 10;
var jhalmuriPrice = 10;
var jhalmuriMoric = true;
var icecramPrice = 60;
var myBudget2 = 50;

if (myBudget2 > jhalmuriPrice) {
    if (jhalmuriMoric == false) {
        console.log('jhalmuri khamo thik ace. But muri te moric thakle khamu na')
    }
    else {
        console.log('tor moric diye tui e kha')
    }
}