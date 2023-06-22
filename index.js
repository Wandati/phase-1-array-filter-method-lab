// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    let newArray = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return newArray;
}

function fuzzyMatch(drivers,string) {
    let newArray = drivers.filter(driver => driver.slice(0,2) === string);
    return newArray;
}
