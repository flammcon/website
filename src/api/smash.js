import delay from './delay';
import characters from './characters';
import players from './players';
import draft from './delay';

export default {
  getCharacters(cb) {
    setTimeout(() => cb(characters), 100)
  },

  getCharacter(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, characters.find(a => a.id == id)));
      }, delay);
    });
  },

  getAssetUrl(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const character = characters.find(a => a.id == id);
        resolve(require(`../assets/smash/${id}-${character.name.replace(/[.]/g, "")}.png`));
      }, delay);
    });
  },

  getAllPlayers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], players));
      }, delay);
    });
  },

  getPlayer(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, players.find(a => a.id == id)));
      }, delay);
    });
  },

  getDraftOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], draft));
      }, delay);
    });
  }
}