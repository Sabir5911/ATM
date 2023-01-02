

import inquirer from "inquirer";
import chalk from "chalk";
import prompt from "inquirer/lib/ui/prompt.js";
async  function cashdep(Balance:number){
   const valueDeposite=await inquirer.prompt([{
      
       name:"cash_deposite",
       type:'number',
       message:"Enter a Money to deposite"


}])
   Balance+=valueDeposite.cash_deposite

   console.log(
    chalk.green(`You have successfullt deposite${valueDeposite.cash_deposite},Your new Balance is${Balance} `)
   )
   return Balance
}
export {cashdep}