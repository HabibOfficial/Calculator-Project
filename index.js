import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "FirstNumber",
        type: "number",
        message: "Enter Your First Number: ",
    },
    {
        name: "SecondNumber",
        type: "number",
        message: "Enter Your Second Number: ",
    },
    {
        name: "Operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answers.Operator == "Addition") {
    console.log(`The addition of ${answers.FirstNumber} and ${answers.SecondNumber} gives: ${answers.FirstNumber + answers.SecondNumber}`);
}
else if (answers.Operator == "Subtraction") {
    console.log(`The subtraction of ${answers.FirstNumber} and ${answers.SecondNumber} gives: ${answers.FirstNumber - answers.SecondNumber}`);
}
else if (answers.Operator == "Multiplication") {
    console.log(`The multiplication of ${answers.FirstNumber} and ${answers.SecondNumber} gives: ${answers.FirstNumber * answers.SecondNumber}`);
}
else {
    console.log(`The division of ${answers.FirstNumber} and ${answers.SecondNumber} is: ${answers.FirstNumber / answers.SecondNumber}`);
}
