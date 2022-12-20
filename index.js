//I am writing a script wich starts a Hyper-V VM using Powershell after receiving a HTTP request.
//I am using the following code to start the VM:
var config = require('./config.json');
const { exec } = require('child_process');

//Importing variables from config.json
var verbose = config.verbose;
var vmName = config.vmName;


//Setup a HTTP server using Express
const express = require('express');
const app = express();
const port = config.port;

app.listen(port, () => { //Start the server
    console.log(`Server running at port ${port}`);
});

app.get('/', (req, res) => { //Handle GET requests
    res.statusCode = 200; //OK
    res.send('Received your request!');
    console.log("Received a request!");
    //if the header contains the key "vmname" print the value of the key and save it to the variable vmName
    if (req.headers.hasOwnProperty("vmname")) {
        vmName = config.vmName; //reset the vmName to the default value
        vmName = req.headers.vmname;
        console.log("Requested VM-Name: " + req.headers.vmname);
    }
    //if the header contains the key "action" start or stop the VM depending on the value of the key
    if (req.headers.hasOwnProperty("action")) {
        if (req.headers.action == "start") {
            startVM();
        }
        else if (req.headers.action == "stop") {
            stopVM();
        }
        else {
            console.log("Invalid action: " + req.headers.action);
        }
    }
    else {
        console.log("No action specified!");
    }
});

//start listening for GET requests on the path /ismyvmactive
//these GET requests are responded with 200 OK if the requested vmname inside the header is found in the output of the command "Get-VM -ComputerName ${config.hostName} | Where-Object {$_.State -eq 'Running'}" and 404 Not Found if the vmname is not found
app.get('/ismyvmactive', (req, res) => {
    exec(`Get-VM -ComputerName ${config.hostName} | Where-Object {$_.State -eq \'Running\'}`, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
        if (error !== null) {
            printError(error, stderr, stdout);
        }
        else {
            if (stdout.includes(req.headers.vmname)) {
                res.status(200).send('Your requested VM is active!');
                console.log("Requested VM is active!");
                console.log("Requested VM-Name: " + req.headers.vmname);
            }
            else {
                
                console.log(stdout);
                res.status(404).send('Your requested VM is not active!');
                console.log("Requested VM is not active!");
                console.log("Requested VM-Name: " + req.headers.vmname);
            }
        }
    })
});



//The following code is used to start the VM
function startVM() {
    exec('Start-VM -Name ' + vmName, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
        if (error !== null) {
            printError(error, stderr, stdout);
        }
        else {
            console.log (`VM (${vmName}) started successfully!`)
        }
        console.log(stdout); //does only print the output of the command if the VM is already running
    })
}


//The following code is used to stop the VM
function stopVM() {
    exec('Stop-VM -Name ' + vmName, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
        if (error !== null) {
            printError(error, stderr, stdout);
        }
        else {
            console.log (`VM (${vmName}) stopped successfully!`)
        }
        console.log(stdout); //does only print the output of the command if the VM is already stopped
    })
}




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