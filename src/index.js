import './style.css';
import { Projects, Project, Task } from './Todo';
import UI from './UI';
import {format} from 'date-fns';

if (localStorage.currentProjectIndex !== undefined){
    Projects.currentProjectIndex = localStorage.currentProjectIndex;
}

if (localStorage.projects !== undefined){
    const projects = JSON.parse(localStorage.projects);
    projects.reverse().forEach((p, i) => {
        const project = new Project(p.name, [], p.currentTaskIndex);
        p.tasks.reverse().forEach((t, j) => {
            project.addTask(new Task(t.title, t.description, t.dueDate, t.priority, t.notes, t.checked));
        });
        Projects.pushProject(project);
    });
    UI.populateProjects();
    
};



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
    e.preventDefault();

    
    
    const task = new Task(title.value, description.value, dueDate.value, priority.value, notes.value);

    if (Projects.projects[Projects.currentProjectIndex].currentTaskIndex === null){
        // console.log('add');
        Projects.projects[Projects.currentProjectIndex].addTask(task);
    } else {
        // console.log('edit');
        const currentProject = Projects.projects[Projects.currentProjectIndex];
        Projects.projects[Projects.currentProjectIndex].tasks[currentProject.currentTaskIndex] = task;
    };

    localStorage.projects = JSON.stringify(Projects.projects);
    UI.switchMain();
    UI.displayTasks()
})

form.addEventListener('reset', () => {
    UI.switchMain();
});