const addbutton = document.getElementById("add");
const subbutton = document.getElementById("sub");
const inputField = document.getElementById("input");
const total = document.getElementById("total")

console.log(addbutton, subbutton, inputField, total);

let countTotal = 0

// function add(addbutton) {
//     countTotal++
// }

// function subtract() {
//     countTotal--
// }

addbutton.addEventListener("click", (event) => {
  event.preventDefault();
  const value = parseInt(inputField.value)
  countTotal += value
  total.textContent = countTotal
});

subbutton.addEventListener("click", (event) => {
    event.preventDefault();
    const value = parseInt(inputField.value)
    countTotal -= value
    total.textContent = countTotal
  });


