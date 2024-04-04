const resultElement = document.querySelector(".risulte");
let result = 0;

// Update the result element with the content of the result variable

resultElement.textContent = result;

// Add an event listener to each button
const allButtons = document.querySelectorAll(".button-number");

for (let i = 0; i < allButtons.length; i++) {
  const button = allButtons[i];
  button.addEventListener("click", function () {
    result += button.textContent;
    resultElement.textContent = result;
  });
}

document.querySelector("#reset").addEventListener("click", function () {
  result = 0;
  resultElement.textContent = result;
});

document.querySelector("#del").addEventListener("click", function () {
  result = result.slice(0, -1);
  resultElement.textContent = result;
});

const switchToggle = document.querySelector(".switch > input");

switchToggle.addEventListener("change", function () {
  if (switchToggle.checked === true) {
    document.body.style.backgroundColor = "red";
    document.querySelector(".calculate").style.backgroundColor = "yellow";
    resultElement.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "grey";
    document.querySelector(".calculate").style.backgroundColor = "orange";
    resultElement.style.backgroundColor = "pink";
  }
});
