// Only change code below this line if you
function myBouncer(arr) {
    var myFilterArray = [];
    myFilterArray = arr.filter(Boolean);
    return myFilterArray;
}

// Only change code above this line

console.log(myBouncer([7, "ate", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;