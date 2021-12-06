const {lightsalmon} = require('color-name');

const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

function newTask(title, description) {
	const task = {
		title,
		description,
		complete: false,

		logstate() {
			console.log(`${this.title} has ${this.complete ? ' ' : ' not '} been completed`);
		},

		markCompleted() {
			this.complete = true;
		},
	};
	return task;
}

function logTaskState(task) {
	console.log(`${task.title} has ${task.complete ? ' ' : ' not '} been completed`);
}

function completeTask(task) {
	task.complete = true;
}

// Driver code
const task1 = newTask('Clean cat Litter', 'Take all the 💩 out of the litter box ');
const task2 = newTask('Do laudry', '🪣');
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);

task1.markCompleted();
console.log(task1);
