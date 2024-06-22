#! /usr/bin/env node

import inquirer from "inquirer";

let user_answer = await inquirer.prompt(

    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word: "
        }
    ]
);

let words = user_answer.Sentence.trim().split(" ")
console.log(words)

console.log(`Your sentence word count is: ${words.length}`);