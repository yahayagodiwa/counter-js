const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const count = document.getElementById("value");

let counter = 0;

decrease.addEventListener("click", () => {
  counter--;
  count.textContent = counter;
  if (counter < 0) {
    count.style.color = "#ff0000";
  }
});

reset.addEventListener("click", () => {
  counter = 0;
  count.textContent = counter;
  if (counter === 0) {
    count.style.color = "#222";
  }
});

increase.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
  if (counter > 0) {
    count.style.color = "green";
  }
});

// count.textContent = counter;
