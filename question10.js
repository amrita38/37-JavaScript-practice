const students = [
  { name: "Ani", dept: "CSE" },
  { name: "Rahul", dept: "ECE" },
  { name: "Riya", dept: "CSE" },
  { name: "Amit", dept: "ME" },
  { name: "Neha", dept: "ECE" },
];

// task:using reduce(), group students by department

const result = students.reduce((acc, student) => {
  acc[student.dept] = acc[student.dept] || [];
  acc[student.dept].push(student);
  return acc;
}, {});

console.log(result);
