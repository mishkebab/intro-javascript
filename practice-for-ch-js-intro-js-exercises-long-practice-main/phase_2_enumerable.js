// Your code here

Array.prototype.myEach = function(callback) {
    for(i = 0; i < this.length; i ++) {
        callback(this[i]);
    }
} 

// arr = [2,4,6];

// doubler = function(num) {
//     console.log(num * 2);
// }

// console.log(arr.myEach(doubler));

Array.prototype.myMap = function(callback) {
    let result = [];

    this.myEach(ele => {
        result.push(callback(ele));
    });

    return result;
}

add_two = function(num) {
    return num + 2;
}

// arr = [2,4,6];

// console.log(arr.myMap(add_two));

Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;
    let acc;
    if (initialValue !== undefined) {
        acc = initialValue; 
    } else {
        acc = this[0];
        arr = arr.slice(1)
    } 

    arr.myEach(el => {
        acc = callback(acc, el); 
    });

    return acc;
}

arr = [1, 2, 3];
reduced = arr.myReduce(function(acc, el) {
    return acc + el;
}, 25);

console.log(reduced);
