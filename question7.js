const students = [
  { name: "A", marks: 75 },
  { name: "B", marks: 92 },
  { name: "C", marks: 60 },
  { name: "D", marks: 85 },
];

// sort students from highest marks to lowest.

students.sort((a, b) => b.marks - a.marks);

console.log(students);