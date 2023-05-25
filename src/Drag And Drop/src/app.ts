//drag and drop
interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
}

//project class
enum ProjectStatus {
    Active,
    Finished
}
class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus) {
    }
}

//project state management class
type Listener<T> = (items: T[]) => void;

//State class
class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listener: Listener<T>) {
        this.listeners.push(listener);
    }
}

class ProjectsState extends State<Project>{
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

const projectState: ProjectsState = ProjectsState.getInstance();


//validating inputs
interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}
const validate = (validatableInput: Validatable): boolean => {
    let isValid = true;

    if (validatableInput.value) {
        isValid = isValid && validatableInput.value.toString().trim().length > 0;
    }

    if (validatableInput.minLength != null) {
        isValid = isValid && validatableInput.value.toString().length >= validatableInput.minLength;
    }

    if (validatableInput.maxLength != null) {
        isValid = isValid && validatableInput.value.toString().length <= validatableInput.maxLength;
    }

    if (validatableInput.min != null && typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }

    if (validatableInput.max != null && typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }

    return isValid;
}

//autobind decorator
const autoBind = (_1: any, _2: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    const adjustedDecorator: PropertyDescriptor = {
        configurable: true,
        enumerable: true,
        get() {
            const boundFun = originalMethod.bind(this);
            return boundFun;
        },
    }

    return adjustedDecorator;
}


//component class
abstract class Component<T extends HTMLElement, U extends HTMLElement>{
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
        templateId: string,
        hostElementId: string,
        insertAtStart: boolean,
        newElementId?: string,
    ) {
        this.templateElement = document.getElementById(templateId) as HTMLTemplateElement;

        this.hostElement = document.getElementById(hostElementId) as T;

        const importedNode = document.importNode(this.templateElement.content, true);

        this.element = importedNode.firstElementChild as U;
        if (newElementId) {
            this.element.id = newElementId;
        }

        this.attach(insertAtStart);
    }

    private attach(insertAtStart: boolean) {
        this.hostElement.insertAdjacentElement(insertAtStart ? "afterbegin" : "beforeend", this.element);
    }

    abstract configure(): void;
    abstract renderContent(): void;
}

//projectItem class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
    private project: Project;

    get persons() {
        if (this.project.people === 1) {
            return "1 person";
        }
        return `${this.project.people} persons`;
    }

    constructor(hostId: string, project: Project) {
        super("single-project", hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();

    }

    @autoBind
    dragStartHandler(event: DragEvent): void {
        event.dataTransfer!.setData("text/plain", this.project.id);
        event.dataTransfer!.effectAllowed = "move";
    }

    dragEndHandler(event: DragEvent): void {
        console.log(event);
    }

    configure(): void {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent(): void {
        this.element.querySelector("h2")!.textContent = this.project.title;
        this.element.querySelector("p")!.textContent = this.project.description;
        this.element.querySelector("h3")!.textContent = this.persons + " assigned";
    }
}

//projectList class
class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private projectType: "active" | "finished") {
        super("project-list", "app", false, `${projectType}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    @autoBind
    dragOverHandler(event: DragEvent): void {
        if (event.dataTransfer && event.dataTransfer.types[0] == "text/plain") {
            event.preventDefault();
            const listEl = this.element.querySelector("ul")!;
            listEl.classList.add("droppable");
        }
    }

    @autoBind
    dragLeaveHandler(_: DragEvent): void {
        const listEl = this.element.querySelector("ul")!;
        listEl.classList.remove("droppable");
    }

    @autoBind
    dropHandler(event: DragEvent): void {
        const projId = event.dataTransfer!.getData("text/plain");
        projectState.moveProject(projId, this.projectType === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
    }

    private renderProjects() {
        this.element.querySelector("ul")!.textContent = "";
        for (const projItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector("ul")!.id, projItem);
        }
    }

    configure() {
        this.element.querySelector("ul")!.addEventListener("dragover", this.dragOverHandler);
        this.element.querySelector("ul")!.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.querySelector("ul")!.addEventListener("drop", this.dropHandler);
        projectState.addListener((projects: Project[]) => {
            const relevantProject: Project[] = projects.filter((project) => {
                if (this.projectType === "active") {
                    return project.status === ProjectStatus.Active;
                }
                return project.status === ProjectStatus.Finished;
            })
            this.assignedProjects = relevantProject;
            this.renderProjects();
        })
    }

    renderContent() {
        const listId = `${this.projectType}-projects-list`;

        this.element.querySelector("ul")!.id = listId;
        this.element.querySelector("h2")!.textContent = this.projectType.toUpperCase() + " Projects";
    }
}

//projectInput class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super("project-input", "app", true, "user-input");

        this.titleInputElement = this.element.querySelector("#title") as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement;

        this.configure();
    }

    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }

    renderContent(): void {
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true
        }

        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        }

        const peopleValidatable: Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        }

        if (validate(titleValidatable) && validate(descriptionValidatable) && validate(peopleValidatable))
            return [enteredTitle, enteredDescription, +enteredPeople];
        else alert("Invalid Input, Please try again");
    }

    private clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }

    @autoBind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput: [string, string, number] | void = this.gatherUserInput();

        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            projectState.addProject(title, description, people);
            this.clearInputs();
        }

    }

}

const projInput = new ProjectInput();

const activeProjList = new ProjectList("active");
const finishProjList = new ProjectList("finished");

