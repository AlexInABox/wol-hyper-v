//I am writing a script wich starts a Hyper-V VM using Powershell after receiving a HTTP request.
//I am using the following code to start the VM:
var config = require('./config.json');
const { exec } = require('child_process');

//Importing variables from config.json
var verbose = config.verbose;
var vmName = config.vmName;

//The following code is used to start the VM
exec('Start-VM -Name ' + vmName, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    if (error !== null) {
        printError(error, stderr, stdout);
    }
    else {
        console.log ("VM (probably) started successfully!")
    }
    console.log(stdout); //does not print anything
})




//A function to print out all the errors incase the user set verbose to true:
/* 
function printError(error, stderr, stdout, true) {          //For some obscure reason method overloading was never implemented in JS...
    console.log('exec error: \n' + error);
    console.log('stderr: \n' + stderr);
    console.log('stdout: \n' + stdout);
}
function printError(error, stderr, stdout, false) {
    console.log("An error occured. Are u sure u are running this script as an administrator?")
    console.log("If u are sure, try to run the script with verbose set to true!")
    console.log("If the error remains, please open an issue on GitHub.")
}
*/

//Method overloading workaround:
function printError(error, stderr, stdout) {
    if (verbose) {
        console.log('exec error: \n' + error);
        console.log('stderr: \n' + stderr);
        console.log('stdout: \n' + stdout);
    } else {
        console.log("An error occured. Are u sure u are running this script as an administrator?")
        console.log("If u are sure, try to run the script with verbose set to true!")
        console.log("If the error remains, please open an issue on GitHub.")
    }
}