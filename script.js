const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const rawInput = textInput.value;

  if (rawInput === "") {
    alert("Please input a value");
    return;
  }

  const normalizedInput = rawInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (normalizedInput === "") {
    resultDiv.innerText = `${rawInput} is not a palindrome`;
    return;
  }

  const reversedInput = normalizedInput.split("").reverse().join("");

  if (normalizedInput === reversedInput) {
    resultDiv.innerText = `${rawInput} is a palindrome`;
  } else {
    resultDiv.innerText = `${rawInput} is not a palindrome`;
  }
});
