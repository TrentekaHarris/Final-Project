//Using Javascript to Create the Task HTML
const createTaskHtml = (name, description, assignedTo, dueDate, status, id) =>
    `<div class="card-body m-5 border border-danger card-body m-5 row row-cols-4" data-task-id=${id}>
    <h5 class="card-title fs-3 col-8">${name}</h5>
    <a href="#" class="btn btn-success col-4">${status}</a>
    <p class="task-description col-12">${description}</p>
    <p class="ask-assignee col-12">${assignedTo}</p>
    <p class="start-date col-12">Start Date: September 25, 2022</p>
    <p class="due-date col-8">${dueDate}</p>
    <a href="#" class="btn btn-success col-4">Delete</a>
    <button class="done-button btn btn-danger col-4">Mark As Done</button>
  </div>`
//Task Manager Class
class TaskManager {
    constructor(task = [], currentId = 0) {
        this._tasks = task;
        this._currentId = currentId;
    }
    //Add task to list
    get tasks() {
        return this._tasks;
    }
    /*increaseTask(newTask){
        return this._tasks.push(newTask);
    }
    //Increase Id
    currentId () {
        console.log(`TO DD: ${this.tasks.length}`)
    }*/
    //Add Task Method
    addTask(newTaskNameInput, newTaskDescription, newTaskAssignedTo, newTaskDueDate, status) {
        const task = {
            id: `TO DD: ${this.tasks.length+1}`,
            newTaskNameInput: newTaskNameInput,
            newTaskDescription: newTaskDescription,
            newTaskAssignedTo: newTaskAssignedTo,
            newTaskDueDate: newTaskDueDate,
            status: status
        };
        this.tasks.push(task)
    }
    //render method
    render() {
        const tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            const date = new Date('October 30, 2022');
            const formattedDate = 'October 30, 2022';
            const tasksHtml = createTaskHtml('Finish Organizing Garage', 'Decorations are overtaking the garage. It needs to be organized before the start of the holiday season.', 'Task Assignee: Thomas', 'Due Date: October 31, 2022', 'incomplete');
            tasksHtmlList.push(taskHtml)
        }
        const tasksHtml = tasksHtmlList.join('\n');
        const taskList = document.querySelector("#tasksList");
        taskList.innerHTML = tasksHtml;
    }

//getTaskById to the TaskManager class
getTaskById(taskId) {
    let foundTask = "";
    for (let i = 0; i < this.tasks.length; i++) {
        let task = this.tasks[i];
        if (task.id === taskId) {
            let foundTask = task;
        }
    }
    return foundTask;

}

//task 8  (save & load method to TaskManager)
save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    const currentId = this.currentId;
    localStorage.setItem('currentId', currentId);
}
load() {
    if (localStorage.getItem('tasks')) {
        const tasksJson = localStorage.getItem('tasks');
        this.tasks = JSON.parse(tasksJson);
    }
    if (localStorage.getItem('currentId')) {
        const currentId = localStorage.getItem('currentId');
        this.currentId = Number(currentId);
    }
}

}
// Create the deleteTask method
/*deleteTask(taskId) {
    // Create an empty array and store it in a new variable, newTasks
    const newTasks = [];

    // Loop over the tasks
    for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
        const task = this.tasks[i];

        // Check if the task id is not the task id passed in as a parameter
        if (task.id !== taskId) {
            // Push the task to the newTasks array
            newTasks.push(task);
        }
        return this.tasks = newTasks;
    }
}*/