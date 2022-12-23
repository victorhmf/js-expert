InjectHttpInterceptor()

import http from 'http';
import { InjectHttpInterceptor } from './../index.js'; 

function handleRequest(request, response) {
  // response.setHeader('X-Instrumented-By', 'ErickWendel')
  response.end('Hello world!')
}

const server = http.createServer(handleRequest)
const port = 5500
server.listen(port, () => console.log('server running at', server.address().port))