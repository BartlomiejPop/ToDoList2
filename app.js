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

const editTask = (ID) => {};

addTaskbtn.addEventListener("click", addTask);
inputEl.addEventListener("click", clearInput);
// completeBtns.addEventListener("click", completeTask);
