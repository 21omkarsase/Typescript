import { Project, ProjectStatus } from "../models/project";

//project state management class
type Listener<T> = (items: T[]) => void;

//State class
class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listener: Listener<T>) {
        this.listeners.push(listener);
    }
}

export class ProjectsState extends State<Project>{
    private projects: Project[] = [];
    private static instance: ProjectsState;

    private constructor() {
        super();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return this.instance = new ProjectsState();
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject: Project = new Project(
            Math.random().toString(),
            title,
            description,
            numOfPeople, ProjectStatus.Active
        );
        this.projects.push(newProject);

        this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
        const project: Project | undefined = this.projects.find((proj) => proj.id === projectId);
        if (project !== undefined && project.status !== newStatus) {
            project.status = newStatus
        }
        this.updateListeners();
    }

    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}


// this will run only once (when imported first time among all files)
export const projectState: ProjectsState = ProjectsState.getInstance();


