import {
  formatCompactNumber,
  formatCurrency,
  formatNumber,
  formatRelativeDate,
} from "./formatters.js"

const number = 9_123_456.789123
console.log("Default:\n", number)
console.log("Currency:\n", formatCurrency(number))
console.log("Number:\n", formatNumber(number))
console.log("Compact:\n", formatCompactNumber(number))

const currentDate = new Date()
const twoMonthsAgo = new Date().setMonth(currentDate.getMonth() - 2)
const yesterday = new Date().setDate(currentDate.getDate() - 1)
const nineDaysAgo = new Date().setDate(currentDate.getDate() - 9)

console.log("Two Months Ago:\n", formatRelativeDate(twoMonthsAgo))
console.log("Yesterday:\n", formatRelativeDate(yesterday))
console.log("Nine Days Ago:\n", formatRelativeDate(nineDaysAgo))
console.log(
  "Yesterday vs Nine Days Ago:\n",
  formatRelativeDate(yesterday, nineDaysAgo)
)
