// *********************Partial********************
interface CourseGoal {
    title: string;
    description: string;
    date: Date;
}

const createGoal = (title: string, description: string, date: Date): CourseGoal => {
    let course1Goal: Partial<CourseGoal> = {};

    course1Goal.title = title;
    course1Goal.description = description;
    course1Goal.date = date;

    return course1Goal as CourseGoal;
}

console.log(createGoal("course 1 goal", "goal goal goal", new Date()));

// *********************** Readonly ***********************
const names: Readonly<string[]> = ["O", "N"];
// names.push("XYZ")  NOT POSSIBLE
// names.pop()  NOT POSSIBLE

console.log(names);
