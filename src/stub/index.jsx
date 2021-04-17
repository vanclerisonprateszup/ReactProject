const map = require('lodash/map')
const Hapi = require('hapi')
const inert = require('inert')
const routes = require('./routes')

function reduceDetails(acc, detail) {
  return Object.assign(acc, { [detail.path]: [detail.type] })
}

function failAction(request, reply, source, error) {
  reply({
    fields: error.data.details.reduce(reduceDetails, {}),
  }).code(400)
}

const latency = 250
const server = new Hapi.server({
  host: '0.0.0.0',
  port: 3000,
  routes: {
    validate: {
      failAction,
    },
    cors: {
      origin: ['*'],
      headers: [
        'content-type',
        'x-application-id',
        'authorization',
        'gw-app-key',
        'x-organization-slug',
        // 'Access-Control-Allow-Origin'
      ],
      additionalHeaders: ['accept', 'authorization', 'content-type'],
    },
  },
})

server.ext('onPreResponse', (request, reply) => new Promise((resolve) => setTimeout(() => resolve(reply.continue, latency))))
map(routes, (routeModule) => map(routeModule, (route) => server.route(route)))

const init = async () => {
  await server.register(inert)
  await server.start()

  console.info(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1)
})

init()
