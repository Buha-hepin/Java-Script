const accountId = 144553
let accountEmail = "hepin@google.com"
var accountPassword = "12345"
accountCity = "surat"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
//var variable can be change & re-declare
//let variable can be change but not re-declare
//const variable can't be change and re-declare



//where many variable you can console.......
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
