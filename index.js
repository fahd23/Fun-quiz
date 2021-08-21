var readlineSync = require("readline-sync");

var chalk = require("chalk");

var score = 0;

var userName = readlineSync.question("Please tell me your name :");

var highScore = {
    name: "Fahd",
    points: "5"
}


function capitalize(input) {
    var words = input.toLowerCase().split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    return CapitalizedWords.join(' ');
}

console.log(chalk.bgMagenta("Hello ! " + capitalize(userName) + " Welcome to fun quiz ✨"));



function play(question, answer) {

    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("You are Right 😍"));
        score++;
    } else {
        console.log(chalk.yellow("You are Wrong  🙁"));
        console.log(chalk.bgYellow("The correct answer is " + answer));
    }

    console.log("Your score is " + score);
    console.log("________✨________✨________✨________");
    console.log("                           ");
}


var questions = [{
    question: `A little girl kicks a soccer ball. It goes 10 feet and comes back to her. How is this possible?
        A : The ball is slippery.
        B : The ground must have been slippery.
        C : Gravity.
        D : She can't kick.
Enter the answer:`,
    answer: "C"
}, {
    question: `A rooster laid an egg on top of the barn roof. Which way did it roll?
        A: East.
        B: It didn't roll.
        C: West.
        D: South.
Enter the answer:`,
    answer: "B"
}, {
    question: `Some months have 31 days, others have 30 days. How many have 28 days?
        A: Two.
        B: One.
        C: Every months have 28 days.
        D: Chinese months have 28 days.
Enter the answer:`,
    answer: "C"
}, {
    question: `What can you never eat for breakfast?
        A. Fruits
        B. A whole turkey.
        C. Dinner.
        D. Eggs
Enter the answer:`,
    answer: "C"
}, {
    question: `What goes up and down, but still remains in the same place?
        A. Stairs
        B. A Scale
        C. A wheel.
        D. The lift
Enter the answer:`,
    answer: "A"
}]

for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
}


console.log(chalk.bgMagenta("Hooray! Your Score is " + score));
console.log("                           ");
console.log(chalk.bgYellow("\nCheck out the High Scores:"));
console.log(chalk.green("\tName : " + highScore.name));
console.log(chalk.green("\tScore: " + highScore.points));
console.log("                           ");
console.log(chalk.bgMagenta("If you beat this 👆 High Score,Please send me a screenshot"));