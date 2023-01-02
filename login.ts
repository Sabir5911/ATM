import { users } from "./users.js";
import {mainscreen} from "./mainscreen.js";
import inquirer from'inquirer'
import { type } from "os";


async function login(){

    const answer=await inquirer.prompt([{

     name:"Account",
     type:"number",
     message:"Enter your Account Number Please: "

    },
{
       name:"pin",
       type:"password",
       message:"Enter your Pin Code"
}]) 

let user=users.find(x=>x.Acc_Number==answer.Account && x.pin_Code==answer.pin)


if(typeof user!="undefined"){
    console.log(`${user.name} is successfully login to account`);
   mainscreen(user.Balance)
    
}
else{
    console.log("you enter invalid acc or passowrd");
    
}
}


login()