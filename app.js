let todo = [];

let req = prompt("Please Enter Your Request");

while (true) {
    if (req === "quit") {
        console.log("Quitting app...");
        break;
    }

    if (req === "list") {
        console.log("-----------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-----------------------");
    } else if (req === "add") {
        let task = prompt("Enter your task that you want to add");
        todo.push(task);
        console.log("Task added");
    } else if (req === "delete") {
        let index = parseInt(prompt("Please enter the task index"));
        if (index < todo.length) {
            todo.splice(index, 1);
            console.log("Task deleted");
        } else {
            console.log("Invalid index");
        }
    } else {
        console.log("Wrong request");
    }

    req = prompt("Please Enter Your Request");
}
