

//Using Javascript to Create the Task HTML

const createTaskHtml = (name, description, assignedTo, dueDate, status) =>  
    `<div class="card-body border border-danger text-break m-5 card-body m-5 row row-cols-8">
    <h5 class="card-title fs-3 col-8">${name}</h5>
    <a href="#" class="btn btn-success col-4">${status}</a>
    <p class="task-description col-12">${description}</p>
    
    <p class="ask-assignee col-12">${assignedTo}</p>
    <p class="start-date col-12">Start Date: September 25, 2022</p> 
    <p class="due-date col-8">${dueDate}</p> 
    <a href="#" class="btn btn-success col-4 delete-button">Delete</a>
  </div>`
   
  
 
 //Delete Task
 deleteTask (taskId) {
    for(var i = 0; i < )

 }
 
  
 
 

//Task Manager Class
class TaskManager {
   
   constructor(task = [], currentId) {
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
        for(let i = 0; i < this.tasks.length; i++){ 
            const task = this.tasks[i];
        const date = new Date('October 30, 2022'); 
        const formattedDate = 'October 30, 2022'; 
        const taskHtml = createTaskHtml('Finish Organizing Garage', 'Decorations are overtaking the garage. It needs to be organized before the start of the holiday season.', 'Task Assignee: Thomas', 'Due Date: October 31, 2022', 'incomplete'); 
        tasksHtmlList.push(taskHtml) 
        }
        const taskList = document.querySelector("#tasksList"); 
        taskList.innerHTML = taskHtml;
    } 

}

