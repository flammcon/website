import delay from './delay';
import characters from './characters';
// import players from './players';
import draft from './draft';

export default {
  getCharacters(cb) {
    setTimeout(() => cb(characters), delay);
  },

  getPlayers(cb) {
    const players = draft.map(value => {
      return {
        name: value.player,
        id: value.pick,
        character: this.getAssetUrl(value.characterId),
        score: 0
      };
    });
    setTimeout(() => cb(players), delay);
  },

  getAssetUrl(id) {
    const character = characters.find(x => x.id == id);
    return require(`../assets/smash/${id}-${character.name.replace(/[.]/g, "")}.png`);
  },

  getCharacter(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, characters.find(a => a.id == id)));
      }, delay);
    });
  },

  // getAssetUrl(id) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const character = characters.find(a => a.id == id);
  //       resolve(require(`../assets/smash/${id}-${character.name.replace(/[.]/g, "")}.png`));
  //     }, delay);
  //   });
  // },

  // getAllPlayers() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(Object.assign([], players));
  //     }, delay);
  //   });
  // },

  // getPlayer(id) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(Object.assign({}, players.find(a => a.id == id)));
  //     }, delay);
  //   });
  // },

  getDraftOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], draft));
      }, delay);
    });
  }
}