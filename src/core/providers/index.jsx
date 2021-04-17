import Api from '../api/gateway'

const Members = {
  getMembers(id) {
    return Api.get('/members', { id })
  }
}

export default Members