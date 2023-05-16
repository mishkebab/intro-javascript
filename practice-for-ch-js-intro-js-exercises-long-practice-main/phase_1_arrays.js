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

arr = [1,2,3,3,3,3]

console.log(arr.uniq())