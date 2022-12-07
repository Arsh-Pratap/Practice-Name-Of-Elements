var element = [
  "hydogen",
  "helium",
  "lithium",
  "beryllium",
  "boron",
  "carbon",
  "nitrogen",
  "oxygen",
  "fluorine",
  "neon",
  "sodium",
  "magnesium",
  "aluminium",
  "silicon",
  "phosphorus",
  "sulfur",
  "chlorine",
  "argon",
  "potassium",
  "calcium",
];
var atomicNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
var randomNumber;
function randomNumbers() {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  return randomNumber;
}
var random = randomNumbers();

var value;
var start = true;

var innerElement = element[randomNumber];
var innerNumber = $("#atomic-number").text(atomicNumber[randomNumber]);
$("#submit").on("click", function () {
  value = document.getElementById("type-name").value;

  if (value == element[randomNumber]) {
    alert("Correct😊👌 My Boy ");
    innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
      document.getElementById("type-name").value = "";
  } else {
    alert("Wrong 😱. Now train for another 1000 Years");
  }
});
$("#again").on("click", function () {
  innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
});
$(document).keyup(function (e) {
  if (e.which === 13) {
    value = document.getElementById("type-name").value;

    if (value == element[randomNumber]) {
      alert("Correct 😊👌 my boii");
      innerNumber = $("#atomic-number").text(atomicNumber[randomNumbers()]);
      document.getElementById("type-name").value = "";
    } else {
      alert("Wrong 😱. Now train for another 1000 Years");
    }
  }
});

