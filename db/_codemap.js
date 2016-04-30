module.exports = {
  _ns: 'motley',
  _folder: 'db',

  'createJSONCollection': require('./createJSONCollection'),
  '@createCollection': '#db.createJSONCollection',

  'mongo.db': null
}