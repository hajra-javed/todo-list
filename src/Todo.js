class Projects{
    static projects = [];
    static currentProjectIndex = -1;
    static createProject = (name) => {
        const project = new Project(name);
        this.projects.unshift(project);
    };
};

class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
        this.currentTaskIndex = null;
    };

    addTask(task){
        this.tasks.unshift(task);
        // this.currentTaskIndex = null;
    };
    
};

class Task{
    constructor(title, description, dueDate, priority, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = false;
    };
};

export {Projects, Project, Task};