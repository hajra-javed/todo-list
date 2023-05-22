import './style.css';
import { Projects, Project, Task } from './Todo';
import UI from './UI';

const newProject = document.querySelector('.new-project');

newProject.addEventListener('click', () => {
    UI.newProject();

    console.log(1111)
    // UI.switchMain()

});

const newTaskBtn = document.querySelector('.new-task');
newTaskBtn.addEventListener('click', () => {
    UI.switchMain();
});

const form = document.querySelector('form');
const taskName = document.querySelector('#name');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const notes = document.querySelector('#notes');

form.addEventListener('submit', (e) => {
    const name = document.querySelector('legend').textContent;
    e.preventDefault();
    // console.log(taskName.value, description.value, dueDate.value, priority.value, notes.value);
    const task = new Task(taskName.value, description.value, dueDate.value, priority.value, notes.value);
    const projectIndex = Projects.getIndex(name);
    console.log(projectIndex);
    Projects.projects[projectIndex].addTask(task);
    // console.log(Projects.projects[projectIndex].tasks);
    UI.switchMain();
    UI.addTask(projectIndex);
})

form.addEventListener('reset', () => {
    UI.switchMain();
});