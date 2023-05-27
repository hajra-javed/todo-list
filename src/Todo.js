class Projects{
    static projects = [];
    static currentProjectIndex = -1;
    static createProject = (name, tasks = []) => {
        const project = new Project(name, tasks);
        this.projects.unshift(project);
    };
    static pushProject = (project) => {
        this.projects.unshift(project);
    }
};

class Project{
    constructor(name, tasks = [], currentProjectIndex = null){
        this.name = name;
        this.tasks = tasks;
        this.currentTaskIndex = currentProjectIndex;
    };

    addTask(task){
        this.tasks.unshift(task);
    };
    
};

class Task{
    constructor(title, description, dueDate, priority, notes, checked = false){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = checked;
    };
};

export {Projects, Project, Task};