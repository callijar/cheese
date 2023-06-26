function cheeseText(cheese) {
  if (
    cheese === "edam" ||
    cheese === "lighvan" ||
    cheese === "cheddar" ||
    cheese === "chedar" ||
    cheese === "camembert"
  ) {
    newCheese = "I love that cheese too 💛";
  } else {
    newCheese = "Check out my favorite cheeses 🧡";
  }
}

function h4Text(name, cheese) {
  let heading = document.querySelector("h4");
  newHeading = `<br /> ${name} loves ${cheese} cheese <br />
  <br />
  🧀 🧀 🧀<br />
  <br />
  <span class = ps> ${newCheese} </span>`;
  heading.innerHTML = newHeading;
  heading.style.display = "block"; //display h4
}

function cheeseCard() {
  let name = prompt("What is your name?").trim();
  let cheese = prompt("What is your favorite cheese?")
    .toLowerCase()
    .trim();
  dispMode = "block";
  cheeseText(cheese);
  h4Text(name, cheese);
}

let cheeseCardButtton = document.querySelector("button");
cheeseCardButtton.addEventListener("click", cheeseCard);