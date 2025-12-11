const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const textInput = document.getElementById("todoText");
  const dateInput = document.getElementById("todoDate");

  const textValue = textInput.value.trim();
  const dateValue = dateInput.value;

  if (textValue === "" || dateValue === "") {
    alert("Isi todo dan tanggal dulu!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("todo-item");

  li.innerHTML = `
    <input type="checkbox" class="check">
    <span class="text">${textValue} - ${dateValue}</span>
    <button class="delete-btn">Delete</button>
  `;

  todoList.appendChild(li);

  textInput.value = "";
  dateInput.value = "";
});

// Delete
todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
