import { first, groupBy, last, sample, pluck } from "./arrayUtils.js"

const array = ["A", "B", "C", "D", "E", "F", "G"]

console.log("First:\n", first(array))
console.log("First 3:\n", first(array, 3))
console.log("Last:\n", last(array))
console.log("Last 3:\n", last(array, 3))
console.log("Sample:\n", sample(array))

const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 24 },
  { name: "Mike", age: 18 },
  { name: "Jill", age: 26 },
  { name: "Sally", age: 21 },
]

console.log("Pluck:\n", pluck(people, "name"))
console.log("Group By:\n", groupBy(people, "age"))
