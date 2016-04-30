module.exports = function container (get, set) {
  return function createJSONCollection (name, options) {
    return function task (cb) {
      var coll = get('vendor.sosa_json')(get('conf.db.json'))(name, options);
      set('@db.' + name, coll);
      setImmediate(cb);
    }
  }
}