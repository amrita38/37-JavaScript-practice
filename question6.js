// remove duplicate numbers
const nums = [1, 2, 2, 3, 4, 4, 5, 5];
// task: return an arrau contaiing only uniue values.

const uniqueNums = [...new Set(nums)];
console.log(uniqueNums);

