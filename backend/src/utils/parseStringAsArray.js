module.exports = function parseStringAsArray(arryAsString) {
    return arryAsString.split(',').map(tech => tech.trim())
}