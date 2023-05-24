import { Projects, Task } from './Todo';
import details from './details.png';
import del from './delete.png';
import { format } from 'date-fns';

class UI {

    static createElement(tag, props = {}) {
        const element = document.createElement(tag);
        if (props.classNames !== undefined) {
            props.classNames.forEach(className => {
                element.classList.add(className);
            });
        };
        if (props.textContent !== undefined) {
            element.textContent = props.textContent;
        };
        if (props.type !== undefined) {
            element.type = props.type;
        };
        if (props.children !== undefined) {
            props.children.forEach(child => {
                element.appendChild(child);
            });
        };
        if (props.value !== undefined) {
            element.value = (props.value);
        };

        if (props.placeholder !== undefined) {
            element.placeholder = (props.placeholder);
        };

        if (props.required !== undefined) {
            element.required = props.required;
        };
        return element;
    };

    static replaceElement(newEl, oldEl) {
        const parent = oldEl.parentNode;
        parent.replaceChild(newEl, oldEl);
    };

    static newProject(createProject) {
        const ul = document.querySelector('ul');
        const input = this.createElement('input', { type: 'text', placeholder: 'Enter project name', required: true });
        input.maxLength = 26;
        const li = this.createElement('li', { children: [input] });
        // li.style.backgroundColor = 'paleturquoise';
        ul.insertBefore(li, ul.firstChild);
        input.focus();

        input.addEventListener('focusout', () => {
            createProject();
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                createProject();
                // console.log(Projects.projects);
            }
        });

        function createProject() {
            const value = input.value;
            if (value !== '') {
                const project = UI.createElement('div', { textContent: value });
                UI.replaceElement(project, input);
                project.style.fontWeight = 'bold';
                li.style.boxShadow = '4px 5px 0px 0px black';
                Projects.createProject(value);

                UI.displayProject(value);
                Projects.currentProjectIndex = 0;
                console.log(Projects.currentProjectIndex);
                li.addEventListener('click', () => {
                    const projectList = document.querySelectorAll('.projects > ul > li');
                    projectList.forEach((val, index) => {
                        if (val === li) {
                            Projects.currentProjectIndex = index;
                            // console.log(Projects.currentProjectIndex);
                        };
                    });
                    // Projects.currentProjectIndex;
                    UI.displayTasks();
                });

            } else {
                ul.removeChild(li);
            };
        };
    };

    static displayProject(name) {
        const todosHeading = document.querySelector('.todos > .top > h2');
        const legend = document.querySelector('legend');
        todosHeading.textContent = name;
        legend.textContent = name;
        document.querySelector('.todos > ul').innerHTML = '';
    };

    static switchMain() {
        const todos = document.querySelector('.todos');
        const form = document.querySelector('form');
        if (todos.style.display === 'none') {
            todos.style.display = 'initial';
            form.style.display = 'none';
        } else {
            todos.style.display = 'none';
            form.style.display = 'initial';
        }

    };

    static displayTasks() {
        const projectIndex = Projects.currentProjectIndex;
        const tasks = Projects.projects[projectIndex].tasks;

        const oldList = document.querySelector('.todos > ul');
        const newList = UI.createElement('ul');

        for (let i = 0; i < tasks.length; i++) {
            const t = tasks[i];
            const taskTitle = UI.createElement('div', { classNames: ['title'], textContent: t.title });
            const taskDueDate = UI.createElement('div', { classNames: ['due-date'], textContent: t.dueDate });
            const taskChecked = UI.createElement('input', { classNames: ['checked'], type: 'checkbox' });
            taskChecked.checked = t.checked;
            const detailsIcon = UI.createElement('img', { classNames: ['details'] });
            detailsIcon.src = details;
            const deleteIcon = UI.createElement('img', { classNames: ['delete'] });
            deleteIcon.src = del;
            const taskItem = UI.createElement('li', {
                classNames: ['task'], children: [taskTitle, taskDueDate, taskChecked, detailsIcon, deleteIcon]
            });
            newList.appendChild(taskItem);

            taskChecked.addEventListener('click', () => {
                const checkedList = document.querySelectorAll('.checked');
                checkedList.forEach((val, index) => {
                    if (val === taskChecked) {
                        Projects.projects[projectIndex].tasks[index].checked = !(Projects.projects[projectIndex].tasks[index].checked);
                    };
                });
            });

            detailsIcon.addEventListener('click', () => {
                const detailsList = document.querySelectorAll('.details');
                detailsList.forEach((val, index) => {
                    if (val === detailsIcon) {
                        Projects.projects[projectIndex].currentTaskIndex = index;
                        console.log(Projects.projects[projectIndex].currentTaskIndex);
                    };
                });

                const title = document.querySelector('#title');
                const description = document.querySelector('#description');
                const dueDate = document.querySelector('#due-date');
                const priority = document.querySelector('#priority');
                const notes = document.querySelector('#notes');
                title.value = t.title;
                description.value = t.description;
                dueDate.value = t.dueDate;
                priority.value = t.priority;
                notes.value = t.notes;
                this.switchMain();

            });

            deleteIcon.addEventListener('click', () => {
                const deleteList = document.querySelectorAll('.delete');
                deleteList.forEach((val, index) => {
                    if (val === deleteIcon) {
                        Projects.projects[projectIndex].tasks.splice(index, 1);
                        this.displayTasks();
                    };
                });
            });
        };
        this.replaceElement(newList, oldList);

    };


};

export default UI;