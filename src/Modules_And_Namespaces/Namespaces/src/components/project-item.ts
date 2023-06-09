/// <reference path = "./base-component.ts" />
/// <reference path = "../decorators/autobind.ts" />
/// <reference path = "../models/project.ts" />

//projectItem class
namespace App {
    export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
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

}