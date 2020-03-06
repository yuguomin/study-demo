const cp = require('child_process'); // 控制子进程调度

const sonProcess = cp.fork(__dirname + '/son.js');
const daughterProcess = cp.fork(__dirname + '/daughter.js');

sonProcess.send('Hi, son.');
daughterProcess.send('Hi, daughter.');

sonProcess.on('message', (str) => {
  console.log(str, '(from son)');
});

daughterProcess.on('message', (str) => {
  console.log(str, '(from daughter)');
});

