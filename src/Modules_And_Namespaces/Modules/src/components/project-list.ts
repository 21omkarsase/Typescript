import { Component } from "./base-component.js";
import { DragTarget } from "../models/drag-drop.js";
import { autoBind } from "../decorators/autobind.js";
import { ProjectItem } from "./project-item.js";
import { Project, ProjectStatus } from "../models/project.js";
import { projectState } from "../state/project-state.js";

//projectList class
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
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
