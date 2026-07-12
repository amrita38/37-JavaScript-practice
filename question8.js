// const even and odd no

const nums = [12, 15, 20, 7, 8, 11];

// take : using reduce(),return :
// {
//     even:3,
//     odd:3
// }


const result = nums.reduce(
  (acc, num) => {
    num % 2 === 0 ? acc.even++ : acc.odd++;
    return acc;
  },
  { even: 0, odd: 0 },
);

console.log(result);