// Your code here

Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;

    for(let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
          sorted = false;
      }
    }
  }

  return this;
}

// arr = [3,2,1];
// console.log(arr.bubbleSort());

String.prototype.substrings = function() {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        // let char = this[i];
        // result.push(char);
            for (j = i + 1; j <= this.length; j++) {
                result.push(this.slice(i, j));
            }
    }

    return result;
}

test_string = "string";
console.log(test_string.substrings());




