let welcomEl = document.getElementById("welcom-el");
let name = "Saidou Salif";
let greeting = "Welcome back ";

let myGreeting = greeting + name;
welcomEl.innerText = myGreeting;
console.log(myGreeting);
// welcomEl.innerText = welcomEl.innerText + "👋";
welcomEl.innerText += "👋";
console.log(welcomEl.innerText);
