import inquirer from "inquirer";
const otheramount = async (Balance) => {
    const others = await inquirer.prompt([{
            name: "others",
            type: 'number',
            message: "INPut your Choices",
        }]);
    if (others.others < Balance) {
        Balance -= others.others;
        console.log(`Your new Balance is ${Balance}`);
    }
    else {
        console.log("you have insufficient balance in your account");
    }
};
async function value(Balance) {
    const options = await inquirer.prompt([{
            name: "amount",
            type: 'list',
            message: "How much Money You Need To Withdraw",
            choices: ["100", "200", "500", "1000", "Others Amount"]
        }]);
    console.log("Currnt Balance", Balance, '$');
    switch (options.amount) {
        case "100":
            if (Balance > 100) {
                Balance -= 100;
                console.log(`Your new Balance is ${Balance}`);
            }
            else {
                console.log("you have insufficient balance in your account");
            }
            break;
        case "200":
            if (Balance > 200) {
                Balance -= 200;
                console.log(`Your new Balance is ${Balance}`);
            }
            else {
                console.log("you have insufficient balance in your account");
            }
            break;
        case "500":
            if (Balance > 500) {
                Balance -= 500;
                console.log(`Your new Balance is ${Balance}`);
            }
            else {
                console.log("you have insufficient balance in your accountYou are Gareeb");
            }
            break;
        case "1000":
            if (Balance > 1000) {
                Balance -= 1000;
                console.log(`Your new Balance is ${Balance}`);
            }
            else {
                console.log("you have insufficient balance in your account");
            }
            break;
        default:
            otheramount(Balance);
            break;
    }
}
export { value };
