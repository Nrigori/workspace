// console.log("hello js")
// console.log("Hi,JS")

// let name = "codeshiba"
// console.log(name)


// fruit = prompt("你最喜欢的水果是什么？")
// alert(fruit)

let food = parseInt(prompt("这餐的花费多少？"))
let tipPercentage = parseInt(prompt("消费占比？")) /100
let tipAmount = food * tipPercentage
let total = food +tipAmount
console.log(tipAmount)
console.log("总金额" + total)