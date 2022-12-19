var Service = require('node-windows').Service;
const path = require('path');
var parentDir = path.dirname(require.main.filename).replace(path.basename(path.dirname(require.main.filename)), '');
// Create a new service object
var svc = new Service({
  name:'WOL-HYPER-V',
  description: 'A service to start and stop Hyper-V VMs using HTTP requests.',
  script: `${parentDir}/index.js`,
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();