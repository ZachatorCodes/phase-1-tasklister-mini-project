document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleNewTask(e.target["new-task-description"].value);
    form.reset();
  });
});

function handleNewTask(task) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.addEventListener("click", handleRemoveTask);
  button.textContent = "X";
  li.textContent = `${task} `;
  li.appendChild(button);
  document.querySelector("#tasks").appendChild(li);
}

function handleRemoveTask(event) {
  event.target.parentNode.remove();
}