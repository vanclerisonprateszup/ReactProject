const mock = require('./mock')


const getMembers = {
  method: 'GET',
  path: '/members',
  handler: () => mock.getMembers,
}

module.exports = {
  getMembers
}