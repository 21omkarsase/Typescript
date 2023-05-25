//in tsconfig.js comment out --> "outFile": "./dist/bundle.js"
// change module type from "common" to "amd"
// import bundle.js in index.html

/// <reference path = "./components/base-component.ts" />
/// <reference path = "./components/project-input.ts" />
/// <reference path = "./components/project-list.ts" />


namespace App {
    new ProjectInput();

    new ProjectList("active");
    new ProjectList("finished");
}