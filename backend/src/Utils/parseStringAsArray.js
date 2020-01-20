module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString != undefined ? arrayAsString.split(',').map(tech => tech.trim()) : 'rs';
}