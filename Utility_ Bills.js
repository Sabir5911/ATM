import chalk from "chalk";
import inquirer from "inquirer";
const Utility = async (Balance) => {
    const inp = await inquirer.prompt([{
            name: "bills",
            type: 'list',
            message: "what bill you want to pay: ",
            choices: ["ELectric", "Gas", "Water Bill"]
        }]);
    let allbills = Math.ceil(Math.random() * 1000 + 1);
    switch (inp.bills) {
        case "ELectric":
            console.log(` your Current bill of eletric is  ${allbills}`);
            Balance -= allbills;
            console.log(` your Current Balance  is :${Balance}`);
            break;
        case "Gas":
            console.log(` your Current bill  is :${allbills}`);
            Balance -= allbills;
            console.log(` your Current Balance  isc:${Balance}`);
            break;
        case "Water Bill":
            console.log(chalk.yellow(` your Current bill of Water is :${allbills}`));
            Balance -= allbills;
            console.log(chalk.green(` your Current Balance is : ${Balance}`));
            break;
        default:
            console.log(chalk.red("Inavalid "));
            break;
    }
};
export { Utility };
