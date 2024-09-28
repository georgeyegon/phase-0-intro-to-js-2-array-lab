let cats = ["Milo", "Otis", "Garfield"];

// Destructive functions
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();  // Remove the last cat from the original array
}

// Non-destructive functions
function appendCat(name) {
    return [...cats, name];  // Return a new array
}

function prependCat(name) {
    return [name, ...cats];  // Return a new array
}

function removeLastCat() {
    return cats.slice(0, -1);  // Return a new array without the last cat
}

function removeFirstCat() {
    return cats.slice(1);  // Return a new array without the first cat
}

// Exporting the functions
module.exports = {
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveFirstCat,
    destructivelyRemoveLastCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};
