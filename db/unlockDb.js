var lockfile = require('lockfile')

module.exports = function container (get, set) {
  return function unlockDb (cb) {
    get('vendor.console').log('motley-json: unlocking db...')
    try {
      lockfile.unlockSync(get('conf.db.json').path + '.lock')
    }
    catch (e) {
      return cb(e)
    }
    get('vendor.console').log('motley-json: db unlocked.')
    setImmediate(cb)
  }
}