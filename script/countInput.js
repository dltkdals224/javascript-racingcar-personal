import { $ } from '../lib/util/document.js';

import { startGame } from './game.js';

const prepareGame = () => {
  const carNameInput = $('#car-name__input');
  const gameCountButton = $('#game-count__button');

  const gameCountInput = $('#game-count__input');

  const IS_VALID = isValidInputValueOfGameCount(gameCountInput.value);

  if (IS_VALID) {
    const ok = confirm(`${gameCountInput.value}번의 게임을 돌리시겠습니까?`);

    if (ok) {
      gameCountInput.readOnly = true;
      gameCountButton.disabled = true;
      startGame(carNameInput.value.split(',').length, Number(gameCountInput.value));
    }
  }
};

const isValidInputValueOfGameCount = gameCount => {
  if (gameCount <= 0) {
    alert('정상적인 수를 입력해주세요.');
    return false;
  }
  if (!Number.isInteger(Number(gameCount))) {
    alert('정수를 입력해주세요.');
    return false;
  }
  return true;
};

(function () {
  const gameCountButton = $('#game-count__button');

  gameCountButton.addEventListener('click', prepareGame);
})();
