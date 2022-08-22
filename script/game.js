import { $, $$ } from '../lib/util/document.js';

import { deleteAll } from '../lib/util/reset.js';
import getRandomNumber from '../lib/util/number.js';

export const startGame = (carNum, gameNum) => {
  setField(carNum);

  const eachRaceLog = $$('.race-log');
  const ADVANCED_COUNT = [];

  Array.from(eachRaceLog).map((_, i) => {
    ADVANCED_COUNT[i] = 0;
  });

  const raceField = $('#race-log-field');

  let gameCount = 0;
  let term = setInterval(function () {
    if (gameCount < gameNum) {
      eachRaceLog.forEach((log, index) => {
        loader(log);
        insertValue(log, ADVANCED_COUNT, index);
      });
    }
    if (gameCount >= gameNum) {
      clearInterval(term);
      findWinner(ADVANCED_COUNT, gameNum);
    }
    gameCount++;
    raceField.scrollTop = raceField.scrollHeight;
  }, 1000);
};

const findWinner = (numberOfAdvancedLog, gameNum) => {
  const winnerName = $('#race-winner-name');
  const carNameContainer = $('#car-name-field');

  const PLAYER_LIST = [];

  Array.from(carNameContainer.children).map((_, i) => {
    PLAYER_LIST[i] = carNameContainer.children[i].innerHTML;
  });

  const ADVANCES_OF_WINNER = Math.max(...numberOfAdvancedLog);
  const WINNER_LIST = [];

  // 우승자 만족 조건
  numberOfAdvancedLog.forEach((_, i) => {
    if (numberOfAdvancedLog[i] === ADVANCES_OF_WINNER) {
      WINNER_LIST[i] = true;
    }
    if (numberOfAdvancedLog[i] !== ADVANCES_OF_WINNER) {
      WINNER_LIST[i] = false;
    }
  });

  // 우승자 출력
  winnerName.classList.remove('visible__hidden');
  winnerName.innerHTML = '';
  winnerName.innerHTML += `🏆 최종 우승자 : ${PLAYER_LIST.map((v, i) => {
    if (WINNER_LIST[i] === true) {
      return v;
    }
  }).join(' ')} 🏆`;

  // 게임 종료 후 로직
  endGame();
};

const endGame = () => {
  const restartButton = $('#game-restart__button');
  restartButton.classList.remove('visible__hidden');

  restartButton.addEventListener('click', deleteAll);
};

const setField = carNum => {
  const raceLog = $('#race-log-field');

  for (let i = 0; i < carNum; i++) {
    const personalZone = document.createElement('div');
    personalZone.classList.add('race-log');

    raceLog.appendChild(personalZone);
  }
};

const loader = component => {
  const spinner = document.createElement('div');
  const innerSpinner = document.createElement('i');

  spinner.classList.add('spinner');
  innerSpinner.classList.add('fas', 'fa-spinner', 'fa-lg', 'fa-spin', 'shot');

  spinner.appendChild(innerSpinner);
  component.appendChild(spinner);

  setTimeout(() => {
    spinner.remove();
  }, 500);
};

const insertValue = (component, numberOfAdvancedLog, index) => {
  const advancedLog = document.createElement('span');

  if (canMove()) {
    numberOfAdvancedLog[index]++;
    advancedLog.classList.add('race-log-icon');
    advancedLog.innerHTML = '🏎';
  }

  setTimeout(() => {
    component.appendChild(advancedLog);
  }, 500);
};

export const canMove = () => {
  const RANDOM_VALUE = getRandomNumber(0, 10);

  if (RANDOM_VALUE >= 4) {
    return true;
  }
  if (RANDOM_VALUE < 4) {
    return false;
  }
};
