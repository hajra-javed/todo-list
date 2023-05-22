import {Projects, Task} from './Todo';

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

    static replaceElement(newEl, oldEl){
        const parent = oldEl.parentNode;
        parent.replaceChild(newEl, oldEl);
    };

    static newProject(createProject) {
        const ul = document.querySelector('ul');
        const input = this.createElement('input', { type: 'text', placeholder: 'Enter project name', required: true});
        input.maxLength = 26;
        const li = this.createElement('li', { children: [input] });
        // li.style.backgroundColor = 'paleturquoise';
        ul.appendChild(li);
        input.focus();
        
        input.addEventListener('focusout', ()=>{
                createProject();
        });

        input.addEventListener('keydown', (e)=>{
            if (e.key === 'Enter'){
                createProject();
                // console.log(Projects.projects);
            }
        });

        function createProject(){
            const value = input.value;
            if (value !== ''){
                const project = UI.createElement('div', {textContent: value});
                UI.replaceElement(project, input);
                project.style.fontWeight = 'bold';
                li.style.boxShadow = '4px 5px 0px 0px black';
                Projects.createProject(value);

                UI.displayProject(value);
                document.querySelector('.todos > ul').innerHTML = '';
                
            } else {
                ul.removeChild(li);
            };
        };
    };

    static displayProject(name){
        const todosHeading = document.querySelector('.todos > .top > h2');
        const legend = document.querySelector('legend');
        todosHeading.textContent = name;
        legend.textContent = name;
        console.log(222);

        // const newTaskBtn = document.querySelector('.new-task');
        // newTaskBtn.addEventListener('click', ()=>{
        //     this.switchMain();
        // });

        // const form = document.querySelector('form');
        // const taskName = document.querySelector('#name');
        // const description = document.querySelector('#description');
        // const dueDate = document.querySelector('#due-date');
        // const priority = document.querySelector('#priority');
        // const notes = document.querySelector('#notes');

        // form.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     console.log(taskName.value, description.value, dueDate.value, priority.value, notes.value);
        //     const task = new Task(taskName.value, description.value, dueDate.value, priority.value, notes.value);
        //     const projectIndex = Projects.getIndex(name);
        //     Projects.projects[projectIndex].addTask(task);
        //     // console.log(Projects.projects[projectIndex].tasks);
        //     this.switchMain();
        //     const taskList = document.querySelector('.todos > ul');

        //     Projects.projects[projectIndex].tasks.forEach(t => {
        //         const taskTitle = UI.createElement('div', {classNames: ['title'], textContent: t.title});
        //         const taskDescription = UI.createElement('div', {classNames: ['description'], textContent: t.description});
        //         const taskDueDate = UI.createElement('div', {classNames: ['due-date'], textContent: t.dueDate});
        //         const taskPriority = UI.createElement('div', {classNames: ['priority'], textContent: t.priority});
        //         const taskNotes = UI.createElement('div', {classNames: ['notes'], textContent: t.notes});
        //         const taskItem = UI.createElement('li', {
        //             classNames: ['task'], children: [taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes]
        //         });
        //         taskList.appendChild(taskItem);
        //     })
        // })

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

    static addTask(projectIndex){
        const oldList = document.querySelector('.todos > ul');
        const newList = UI.createElement('ul');

        Projects.projects[projectIndex].tasks.forEach(t => {
            const taskTitle = UI.createElement('div', { classNames: ['title'], textContent: t.title });
            const taskDescription = UI.createElement('div', { classNames: ['description'], textContent: t.description });
            const taskDueDate = UI.createElement('div', { classNames: ['due-date'], textContent: t.dueDate });
            const taskPriority = UI.createElement('div', { classNames: ['priority'], textContent: t.priority });
            const taskNotes = UI.createElement('div', { classNames: ['notes'], textContent: t.notes });
            const taskItem = UI.createElement('li', {
                classNames: ['task'], children: [taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes]
            });
            newList.appendChild(taskItem);
        });
        this.replaceElement(newList, oldList);
    };


};

export default UI;