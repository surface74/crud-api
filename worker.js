import { parentPort, workerData} from 'node:worker_threads';
import { http } from 'node:http';

const PORT = workerData.port;
const HOST = workerData.host;
const server = http.createServer((req, res) => {

});

server.listen(PORT, HOST, () => {
  console.log(`Started worker on ${HOST}:${PORT}`);
})

server.on('message', (data))
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});