#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log("Welcome to the Currency Converter App");
startAgain();
async function start() {
    await inquirer.prompt([{
            type: "list",
            message: ".......  Please Select the Currency  you want to convert to Rupees .........",
            name: "option",
            choices: ["dollar", "riyal", "dirham", "pound", "euro"]
        },
        {
            type: "number",
            message: "Please Enter your Amount ... ",
            name: "rs",
        }
    ])
        .then((answers) => {
        if (answers.option == "dollar") {
            console.log(`${answers.rs} Dollars = ${answers.rs * 260.40} Rupees`);
        }
        else if (answers.option == "riyal") {
            console.log(`${answers.rs} Riyals = ${answers.rs * 69.48} Rupees`);
        }
        else if (answers.option == "dirham") {
            console.log(`${answers.rs} Dirhams = ${answers.rs * 71.58} Rupees`);
        }
        else if (answers.option == "pound") {
            console.log(`${answers.rs} Pounds = ${answers.rs * 313.63} Rupees`);
        }
        else if (answers.option == "euro") {
            console.log(`${answers.rs} Euros = ${answers.rs * 279.06} Rupees`);
        }
    });
}
async function startAgain() {
    do {
        await start();
        console.log("\n");
        var option = await inquirer.prompt([{
                type: "input",
                message: chalk.green("Press Y to Continue .........."),
                name: "question",
            }]);
    } while (option.question == "y" || option.question == "Y" || option.question == "YES" || option.question == "yes" || option.question == "Yes");
}
;
