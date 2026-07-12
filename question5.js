const names=["ani", "rahul", "priya","rohit"];

// rask: convert each name so that the first letter is capitalized
const capitalizedNames = names.map(name=>{
    return name.charAt(0).toUpperCase()+
    name.slice(1);
})
console.log(capitalizedNames);