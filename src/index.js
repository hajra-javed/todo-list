import './style.css';
import { Projects, Project, Task } from './Todo';
import UI from './UI';
import {format} from 'date-fns';

const newProject = document.querySelector('.new-project');
const form = document.querySelector('form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const notes = document.querySelector('#notes');

newProject.addEventListener('click', () => {
    UI.newProject();
    // UI.switchMain()

});

const newTaskBtn = document.querySelector('.new-task');
newTaskBtn.addEventListener('click', () => {
    form.reset();
    dueDate.value = format(new Date(Date.now()), 'yyyy-MM-dd');
    title.focus();
    Projects.projects[Projects.currentProjectIndex].currentTaskIndex = null;
    // UI.switchMain();
});

form.addEventListener('submit', (e) => {
    // const name = document.querySelector('legend').textContent;
    e.preventDefault();

    // console.log("current projject" , Projects.currentProjectIndex);
    // console.log("current task" , Projects.projects[Projects.currentProjectIndex].currentTaskIndex);

    
    
    const task = new Task(title.value, description.value, dueDate.value, priority.value, notes.value);

    if (Projects.projects[Projects.currentProjectIndex].currentTaskIndex === null){
        console.log('add');
        Projects.projects[Projects.currentProjectIndex].addTask(task);
    } else {
        console.log('edit');
        const currentProject = Projects.projects[Projects.currentProjectIndex];
        Projects.projects[Projects.currentProjectIndex].tasks[currentProject.currentTaskIndex] = task;
        // Projects.projects[Projects.currentProjectIndex].currentTaskIndex === null
    };
    UI.switchMain();
    UI.displayTasks(Projects.currentProjectIndex);

    console.log(Projects.currentProjectIndex, Projects.projects);
})

form.addEventListener('reset', () => {
    UI.switchMain();
});