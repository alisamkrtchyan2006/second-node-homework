const EventEmitter = require('events')

class UserActionTracker extends EventEmitter {
  constructor() {
    super()
    this.actions = []
  }


  logAction(action) {
    this.actions.push(action)
    this.emit('actionLogged', action)


    if (this.actions.length > 5) {
      this.emit('maxActions', this.actions.length)
    }
  }


  getActionCount() {
    return this.actions.length
  }
}

module.exports = UserActionTracker
