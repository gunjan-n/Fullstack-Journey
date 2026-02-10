const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");

  span.innerText = taskText;
  delBtn.innerText = "X";

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  emptyMsg.style.display = "none";
  input.value = "";

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  delBtn.addEventListener("click", () => {
    li.remove();
    if (list.children.length === 0) {
      emptyMsg.style.display = "block";
    }
  });
});
