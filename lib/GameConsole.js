function GameConsole(systemName) {
  this.systemName = systemName;

}

GameConsole.prototype.play = function(game) {
  return this.systemName + ' plays ' + game.title;


};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

module.exports = GameConsole;