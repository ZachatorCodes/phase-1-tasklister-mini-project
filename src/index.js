document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleNewTask((e.target["new-task-description"].value), (e.target["dropdown"].value));
    form.reset();
  });
});

function handleNewTask(task, priority) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.addEventListener("click", handleRemoveTask);
  button.textContent = "❌";
  li.textContent = `${task} `;
  if (priority === "high-priority") {
    li.style.color = "red";
  }
  else if (priority === "medium-priority") {
    li.style.color = "yellow";
  }
  else if (priority === "low-priority") {
    li.style.color = "green";
  }
  li.appendChild(button);
  document.querySelector("#tasks").appendChild(li);
}

function handleRemoveTask(event) {
  event.target.parentNode.remove();
}