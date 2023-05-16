// Your code here


Array.prototype.uniq = function() {
    let result = []
    this.forEach(ele => {
        if (!result.includes(ele)) {
            result.push(ele);
        };
    })
    return result;
};

// arr = [1,2,3,3,3,3]
// console.log(arr.uniq())

Array.prototype.twoSum = function() {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      let num1 = this[i];
      for (let j = i + 1; j < this.length; j++) {
        let num2 = this[j];
        if (num1 + num2 === 0) {
          result.push([i, j]);
        }
      }
    }
    return result;
  }

// arr = [-1, 0, 2, -2, 1];
// console.log(arr.twoSum());

Array.prototype.transpose = function() {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        let subArr = [];
        for (let j = 0; j < this.length; j++) {
            subArr.push(this[j][i]);
        };
        result.push(subArr);
    };

    return result;
}

// arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
// console.log(arr.transpose())


