import { Projects, Task } from './Todo';
import details from './details.png';
import del from './delete.png';

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

    static newProject() {
        const ul = document.querySelector('ul');
        const input = this.createElement('input', { type: 'text', placeholder: 'Enter project name', required: true });
        input.maxLength = 50;
        const li = this.createElement('li', { children: [input] });
        ul.insertBefore(li, ul.firstChild);
        input.focus();

        input.addEventListener('focusout', () => {
            createProject();
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                createProject();
            }
        });

        function createProject() {
            const value = input.value;
            if (value !== '') {

                document.querySelector('.new-task').style.display = 'initial';
                document.querySelector('.headings').style.display = 'flex';

                const projectName = UI.createElement('div', { textContent: value });
                projectName.style.fontWeight = 'bold';
                const deleteIcon = UI.createElement('img', { classNames: ['delete'] });
                deleteIcon.src = del;
                const project = UI.createElement('div', { children: [projectName, deleteIcon] });
                UI.replaceElement(project, input);
                li.style.boxShadow = '4px 5px 0px 0px black';
                Projects.createProject(value);

                deleteIcon.addEventListener('click', () => {
                    const deleteList = document.querySelectorAll('.projects .delete');
                    deleteList.forEach((val, index) => {
                        if (val === deleteIcon) {
                            Projects.projects.splice(index, 1);
                            UI.populateProjects()
                            localStorage.projects = JSON.stringify(Projects.projects);
                            if (Projects.projects.length !== 0){
                                Projects.currentProjectIndex = 0;
                                localStorage.currentProjectIndex = JSON.stringify(0);
                                this.displayTasks();
                            } else {
                                document.querySelector('.todos h2').textContent = 'Add your first project';
                                document.querySelector('.new-task').style.display = 'none';
                                document.querySelector('.headings').style.display = 'none';
                            }
                        };
                    });
                });

                Projects.currentProjectIndex = 0;
                UI.displayProject();
                localStorage.projects = JSON.stringify(Projects.projects);
                localStorage.currentProjectIndex = 0;
                projectName.addEventListener('click', () => {
                    const projectList = document.querySelectorAll('.projects > ul > li');
                    projectList.forEach((val, index) => {
                        if (val === li) {
                            Projects.currentProjectIndex = index;
                            localStorage.currentProjectIndex = index;
                        };
                    });
                    UI.displayTasks();
                });

            } else {
                ul.removeChild(li);
            };
        };
    };

    static displayProject() {
        const name = Projects.projects[Projects.currentProjectIndex].name;
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

    static populateProjects() {
        // const ul = document.querySelector('ul');
        const ul = this.createElement('ul');
        Projects.projects.forEach(p => {
            const projectName = UI.createElement('div', { textContent: p.name });
            projectName.style.fontWeight = 'bold';
            const deleteIcon = UI.createElement('img', { classNames: ['delete'] });
            deleteIcon.src = del;
            const project = UI.createElement('div', { children: [projectName, deleteIcon] });
            const li = this.createElement('li', { children: [project] });
            li.style.boxShadow = '4px 5px 0px 0px black';
            ul.appendChild(li);

            deleteIcon.addEventListener('click', () => {
                const deleteList = document.querySelectorAll('.projects .delete');
                deleteList.forEach((val, index) => {
                    if (val === deleteIcon) {
                        Projects.projects.splice(index, 1);
                        this.populateProjects();
                        localStorage.projects = JSON.stringify(Projects.projects);
                        if (Projects.projects.length !== 0){
                            Projects.currentProjectIndex = 0;
                            localStorage.currentProjectIndex = JSON.stringify(0);
                            this.displayTasks();
                        } else {
                            document.querySelector('.todos h2').textContent = 'Add your first project';
                            document.querySelector('.new-task').style.display = 'none';
                            document.querySelector('.headings').style.display = 'none';
                        }
                    };
                });
            });

            projectName.addEventListener('click', () => {
                const projectList = document.querySelectorAll('.projects > ul > li');
                projectList.forEach((val, index) => {
                    if (val === li) {
                        Projects.currentProjectIndex = index;
                        localStorage.currentProjectIndex = index;
                    };
                });
                UI.displayTasks();
            });

            this.displayTasks();
        });
        this.replaceElement(ul, document.querySelector('.projects ul'));
    };

    static displayTasks() {
        const projectIndex = Projects.currentProjectIndex;
        if (projectIndex === null) {
            return;
        }

        this.displayProject();
        const tasks = Projects.projects[projectIndex].tasks;

        const oldList = document.querySelector('.todos > ul');
        const newList = UI.createElement('ul');

        for (let i = 0; i < tasks.length; i++) {
            const t = tasks[i];
            const taskTitle = UI.createElement('div', { classNames: ['title'], textContent: t.title });
            const taskDueDate = UI.createElement('div', { classNames: ['due-date'], textContent: t.dueDate });

            const left = this.createElement('div', { classNames: ['left'], children: [taskTitle, taskDueDate] });

            const taskChecked = UI.createElement('input', { classNames: ['checked'], type: 'checkbox' });
            taskChecked.checked = t.checked;
            const detailsIcon = UI.createElement('img', { classNames: ['details'] });
            detailsIcon.src = details;
            const deleteIcon = UI.createElement('img', { classNames: ['delete'] });
            deleteIcon.src = del;

            const right = this.createElement('div', { classNames: ['right'], children: [taskChecked, detailsIcon, deleteIcon] });

            const taskItem = UI.createElement('li', {
                classNames: ['task'], children: [left, right]
            });

            if (t.priority === 'low'){
                taskItem.style.backgroundColor = '#efefef'
            } else if (t.priority === 'high'){
                taskItem.style.backgroundColor = '#ff9191'
            };

            newList.appendChild(taskItem);

            taskChecked.addEventListener('click', () => {
                const checkedList = document.querySelectorAll('.checked');
                checkedList.forEach((val, index) => {
                    if (val === taskChecked) {
                        Projects.projects[projectIndex].tasks[index].checked = !(Projects.projects[projectIndex].tasks[index].checked);
                        localStorage.projects = JSON.stringify(Projects.projects);
                    };
                });
            });

            detailsIcon.addEventListener('click', () => {
                const detailsList = document.querySelectorAll('.details');
                detailsList.forEach((val, index) => {
                    if (val === detailsIcon) {
                        Projects.projects[projectIndex].currentTaskIndex = index;
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
                const deleteList = document.querySelectorAll('.todos .delete');
                deleteList.forEach((val, index) => {
                    if (val === deleteIcon) {
                        Projects.projects[projectIndex].tasks.splice(index, 1);
                        localStorage.projects = JSON.stringify(Projects.projects);
                        this.displayTasks();
                    };
                });
            });
        };
        this.replaceElement(newList, oldList);

    };


};

export default UI;