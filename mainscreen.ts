import { cashdep } from "./cashdeposit.js";
import Choices from "inquirer/lib/objects/choices.js";
import inquirer from "inquirer";
import prompt from "inquirer/lib/ui/prompt.js";
import { users } from "./users.js";
import { value } from "./cashwithdraw.js";
import { Utility } from "./Utility_ Bills.js";
import chalk from "chalk";




const mainscreen=async  (Balance:number)=>{


 
    const choice=await inquirer.prompt([{
        name:"Meanu",
        type:"list",
        message:'What Type of Transiction Do you want to perform',

        choices:["Balance Check","Deposite Cash","Cash WithDraw","Utility Bills","Exit"],  
    }])
    
    switch (choice.Meanu) {
        case "Balance Check":
            console.log("Your Balance is",Balance,"$");

            break;
            case "Cash WithDraw":
                console.log("Current Balance is", Balance);
             await value(Balance)
            break;
                case "Deposite Cash":
                    console.log("Current Balance is", Balance);
                    
                    await  cashdep(Balance)   
        
                    break;
                    case "Utility Bills":
                        console.log("Current Balance is", Balance);
                        
                        await  Utility(Balance)   
            
            
                  case "Exit":
                  console.log(chalk.blue("Thanks For Using Our Services"));
                  

                  break;
            
    
        default:
            console.log("Invalid");
            
            break;

          
    }

  
}
export {mainscreen}