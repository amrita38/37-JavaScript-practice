// question 1
const users = [
  { name: "Rahul", age: 22 },
  { name: "Rahul", age: 17 },
  { name: "Priya", age: 25 },
  { name: "Riya", age: 25 },
];
const adults = users.filter((user) => user.age >= 18);
console.log(adults);

const result = users.filter((user)=> user.name.includes("i"))
console.log(result);