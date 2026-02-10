/***********************
 * SELECTING ELEMENTS
 ***********************/

// getElementById
const heading = document.getElementById("main-heading");

// getElementsByClassName
const paragraphs = document.getElementsByClassName("text");

// getElementsByTagName
const buttons = document.getElementsByTagName("button");

// querySelector
const image = document.querySelector("#image");

// querySelectorAll
const cards = document.querySelectorAll(".card");

/***********************
 * innerText vs innerHTML
 ***********************/
document.getElementById("text-btn").addEventListener("click", () => {
  paragraphs[0].innerText = "Changed using innerText";
  paragraphs[1].innerHTML = "<strong>Changed using innerHTML</strong>";
});

/***********************
 * getAttribute / setAttribute
 ***********************/
document.getElementById("img-btn").addEventListener("click", () => {
  const currentSrc = image.getAttribute("src");

  image.setAttribute(
    "src",
    currentSrc.includes("150")
      ? "https://via.placeholder.com/200"
      : "https://via.placeholder.com/150"
  );
});

/***********************
 * COUNTER PROJECT
 ***********************/
const counterValue = document.getElementById("counter-value");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counterValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

/***********************
 * THEME TOGGLE
 ***********************/
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/***********************
 * LIVE TEXT PREVIEW
 ***********************/
const textInput = document.getElementById("text-input");
const previewText = document.getElementById("preview-text");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  previewText.textContent = textInput.value;
  charCount.textContent = `Characters: ${textInput.value.length}`;
});

/***********************
 * style property
 ***********************/
document.getElementById("style-btn").addEventListener("click", () => {
  heading.style.color = "blue";
  heading.style.fontSize = "36px";
  heading.style.textTransform = "uppercase";
});

/***********************
 * onclick (old way)
 ***********************/
document.getElementById("old-btn").onclick = function () {
  alert("This uses onclick");
};

/***********************
 * addEventListener (modern way)
 ***********************/
document.getElementById("new-btn").addEventListener("click", () => {
  alert("This uses addEventListener");
});