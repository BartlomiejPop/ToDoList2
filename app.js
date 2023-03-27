const inputEl = document.querySelector("input");
const addTaskbtn = document.querySelector(".task-creation-btn");
const completeBtns = document.getElementsByClassName(".complete-btn");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");
const tasksSection = document.querySelector(".bottom-section");
const taskEl = document.querySelector(".task");
let IDcounter = 1;

const addTask = () => {
	if (inputEl.value === "") {
		inputEl.style.color = "red";
		inputEl.attributes.placeholder.value = "wpisz nazwę zadania!";
	} else {
		const newTask = document.createElement("div");
		newTask.classList.add("task");
		newTask.setAttribute("ID", IDcounter);
		newTask.innerHTML = `
					<input class="edit-task-name" type="text" placeholder="Wpisz treść zadania..." />

					<span class="task-name">${inputEl.value}</span>
					
					<div class="edit-field">
						<button class="complete-btn" ID="${IDcounter}" onclick="completeTask(${IDcounter})">
							<i class="fa-solid fa-check"></i>
						</button>
						<button class="edit-btn" onclick="editTask(${IDcounter})" ID="${IDcounter}">EDIT</button>
						<button class="delete-btn" onclick="deleteTask(${IDcounter})" ID="${IDcounter}">
							<i class="fa-solid fa-xmark"></i>
						</button>
					</div>
				`;
		tasksSection.appendChild(newTask);

		IDcounter++;
	}
};

const completeTask = (ID) => {
	const taskToComplete = document.getElementById(ID);
	const completedTaskName = taskToComplete.firstElementChild.nextElementSibling;
	completedTaskName.style.textDecoration = "line-through";
	console.log(completedTaskName);
	taskToComplete.style.backgroundColor = " #c8eda7";
	taskToComplete.style.color = "#11db47";
};

const deleteTask = (ID) => {
	const taskToDelete = document.getElementById(ID);
	tasksSection.removeChild(taskToDelete);
};

const clearInput = () => {
	inputEl.style.color = "black";
	inputEl.attributes.placeholder.value = "Wpisz treść zadania...";
};

const editTask = (ID) => {
	const taskToEdit = document.getElementById(ID);
	const editInput = taskToEdit.firstElementChild;
	editInput.focus();
	editInput.style.display = "block";
	document.addEventListener("keyup", (event) => {
		if (event.code === "Enter") {
			editInput.nextElementSibling.textContent = editInput.value;
			editInput.style.display = "none";
		}
	});
};

addTaskbtn.addEventListener("click", addTask);
inputEl.addEventListener("click", clearInput);
// editBtn.addEventListener("click", editTask);
// completeBtns.addEventListener("click", completeTask);
