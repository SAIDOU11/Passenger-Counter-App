let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  console.log(count);
  countEl.textContent = count;
}

function save() {
  let countEntries = count + " - ";
  console.log(count);
  saveEl.textContent += countEntries;
  count = 0;
  countEl.textContent = count;
}
