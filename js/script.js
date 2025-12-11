const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const filter = document.getElementById("filter");

// ------------ ADD TODO ------------
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

// ------------ DELETE TODO ------------
todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

// ------------ FILTER TODO ------------
filter.addEventListener("change", function () {
  const items = document.querySelectorAll(".todo-item");

  items.forEach((item) => {
    const checkbox = item.querySelector(".check");

    if (filter.value === "all") {
      item.style.display = "flex";
    }

    if (filter.value === "completed") {
      item.style.display = checkbox.checked ? "flex" : "none";
    }

    if (filter.value === "uncompleted") {
      item.style.display = checkbox.checked ? "none" : "flex";
    }
  });
});
