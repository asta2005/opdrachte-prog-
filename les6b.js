let array = ["hello", false, 40, " amazing", "goodmorning"];

array.splice(2, 0, "Lemon", "Kiwi");
let poppedItem = array.pop();
let ShiftedItem = array.shift();
array.push("eat");

console.log(ShiftedItem, poppedItem, array);