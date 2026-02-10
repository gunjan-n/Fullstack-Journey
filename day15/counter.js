const textarea = document.getElementById("text-box");
const count = document.getElementById("count");
const limit = 100;

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  count.innerText = `Characters: ${length} / ${limit}`;

  if (length > limit) {
    count.classList.add("warning");
  } else {
    count.classList.remove("warning");
  }
});
