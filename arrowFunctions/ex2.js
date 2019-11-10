// Write an expression that uses an array prototype method (filter, reduce, map, etc.)
//   to compute the total value of the mahines in the inventory array;

const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

// Filter out things that arent machines:
let justMachines = inventory.filter( item => item.type != "machine")
console.log(justMachines) 

// Calculate the total value of the machines
let totalMachineValue = inventory.reduce((a,b) => a + b.value, 0)
console.log(totalMachineValue)