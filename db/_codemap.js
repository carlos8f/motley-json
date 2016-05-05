module.exports = {
  _ns: 'motley',
  _folder: 'db',

  'createJSONCollection': require('./createJSONCollection'),
  'unlockDb': require('./unlockDb'),
  '@createCollection': '#db.createJSONCollection'
}