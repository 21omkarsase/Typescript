//in tsconfig.js comment  --> "outFile": "./dist/bundle.js"
// change module type from "amd" or "common" to "es2022"
// import app.js in index.html
// <script type="module" src = "dist/app.js" > </script>

import { ProjectList } from "./components/project-list"
import { ProjectInput } from "./components/project-input"

new ProjectInput();

new ProjectList("active");
new ProjectList("finished");

console.log("namkar");
