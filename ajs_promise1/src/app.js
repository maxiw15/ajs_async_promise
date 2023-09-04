import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const value = read()
      .then(response => json(response))
      .then(response2 => response2);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 500);
    });
  }
}

// GameSavingLoader.load().then(saving => {
//   console.log(JSON.parse(saving));
// });
