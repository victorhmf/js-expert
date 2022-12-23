import http from 'http';
import Api from './api.js';

const api = new Api()

const routes = {
  '/send-message:post': async (request, response) => {
    for await (const data of request) {
      try {
        await api.sendMessage(JSON.parse(data))    
      } catch (error) {
        response.writeHead(403)
        response.write(error.message)
        response.end()
      }
      finally{
        response.end()
      }
    }  
  },
  '/add-credits:post': async (request, response) => {
    for await (const data of request) {
      await api.addCredits(JSON.parse(data))    
    }
    return response.end()
  },
  default: (request, response) => {
    response.write('not found!')
    return response.end()
  }
}

const handler = function (request, response) {
  const {url, method} = request
  const routeKey = `${url}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default
  response.writeHead(200, {
    'Content-type': 'text/html'
  })

  return chosen(request, response)
}

http.createServer(handler)
  .listen(5050, () => console.log('app running at', 5050))