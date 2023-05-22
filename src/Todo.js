class Projects{
    static projects = [];
    static selected = null;
    static createProject = (name) => {
        const project = new Project(name);
        this.projects.push(project);
    };
    static getIndex(name){
        return this.projects.findIndex(p => p.name === name);
    }
};

class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    };

    addTask(task){
        this.tasks.push(task);
    };
    
};

class Task{
    constructor(title, description, dueDate, priority, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    };
};

export {Projects, Project, Task};