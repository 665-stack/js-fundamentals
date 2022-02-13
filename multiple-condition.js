var gotJob = false;
var moneySaved = 2200;
var hasflat = true;
var hasHouse = true;

// if (gotJob == true || moneySaved > 200000) {
//     console.log('cholo biya kore feli')
// }
// else {
//     console.log('tor kopale biya nai')
// }


if (gotJob == true || moneySaved > 200000 && hasflat == true) {
    console.log('cholo biya kore feli')
}
else {
    console.log('tor kopale biya nai re bai')
}

// more complex "if" "else"
if ((gotJob == true && moneySaved > 200000) || (hasflat == true && hasHouse == true)) {
    console.log('cholo biya kore feli')
}
else {
    console.log('tor kopale biya nai')
}
