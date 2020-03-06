/** 
 * @name 多进程优化服务完整示例代码
 * @description
 * 详细实现过程解析可通过博客 https://www.yuguomin.com/2020/02/17/ssr-cluster/
 * 检测报错重启：
 * 1. node child-process/clusterDemo
 * 2. curl http://127.0.0.1:3000/
 */
const cluster = require('cluster');
const os = require('os');
// 判断是否为主进程
if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length / 2; i++) {
    const worker = cluster.fork(); // 创建子进程
    workInit(worker);
  }
  // 当有进程退出，在一定时间后进行重启
  cluster.on('exit', () => {
    setTimeout(() => {
      const worker = cluster.fork();
      workInit(worker);
    }, 5000);
  });
} else {
  require('./app.js');
  // 监听主进程消息，进行状态检测回调
  process.on('message', (msg) => {
    if (msg === 'ping') process.send('pong');
  });
  process.on('uncaughtException', (err) => {
    // 这里可进行错误上报
    console.log('err', err);
    process.send('close');
    process.exit(1); // 主动退出防止进程假死
  });
}

function workInit(worker) {
  let missedPing = 0;
  // 每隔五秒发送消息给子进程，通过返回计数确认是否假死
  let timer = setInterval(() => {
    worker.send('ping');
    missedPing++;
    if (missedPing >= 5) {
      clearInterval(timer);
      process.kill(worker.process.pid);
    }
  }, 5000);
  // 监听子进程的消息，进行心跳计数
  worker.on('message', (msg) => {
    if (msg === 'close') clearInterval(timer);
    if (msg === 'pong') missedPing--;
  });
}