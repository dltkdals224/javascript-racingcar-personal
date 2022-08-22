import { $, $$ } from '../lib/util/document.js';

import { deleteAll } from '../lib/util/reset.js';
import getRandomNumber from '../lib/util/number.js';

export const startGame = (carNum, gameNum) => {
  setField(carNum);

  const EACH_RACE_LOG = $$('.race-log');
  const ADVANCED_COUNT = [];

  Array.from(EACH_RACE_LOG).map((_, i) => {
    ADVANCED_COUNT[i] = 0;
  });

  const RACE_FIELD = $('#race-log-field');

  let gameCount = 0;
  let term = setInterval(function () {
    if (gameCount < gameNum) {
      EACH_RACE_LOG.forEach((log, index) => {
        loader(log);
        insertValue(log, ADVANCED_COUNT, index);
      });
    }
    if (gameCount >= gameNum) {
      clearInterval(term);
      findWinner(ADVANCED_COUNT, gameNum);
    }
    gameCount++;
    RACE_FIELD.scrollTop = RACE_FIELD.scrollHeight;
  }, 1000);
};

const findWinner = (numberOfAdvancedLog, gameNum) => {
  const WINNER_NAME = $('#race-winner-name');
  const CAR_NAME_CONTAINER = $('#car-name-field');

  const PLAYER_LIST = [];

  Array.from(CAR_NAME_CONTAINER.children).map((_, i) => {
    PLAYER_LIST[i] = CAR_NAME_CONTAINER.children[i].innerHTML;
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
  WINNER_NAME.classList.remove('visible__hidden');
  WINNER_NAME.innerHTML = '';
  WINNER_NAME.innerHTML += `🏆 최종 우승자 : ${PLAYER_LIST.map((v, i) => {
    if (WINNER_LIST[i] === true) {
      return v;
    }
  }).join(' ')} 🏆`;

  // 게임 종료 후 로직
  endGame();
};

const endGame = () => {
  const RESTART_BUTTON = $('#game-restart__button');
  RESTART_BUTTON.classList.remove('visible__hidden');

  RESTART_BUTTON.addEventListener('click', deleteAll);
};

const setField = carNum => {
  const RACE_LOG = $('#race-log-field');

  for (let i = 0; i < carNum; i++) {
    const personalZone = document.createElement('div');
    personalZone.classList.add('race-log');

    RACE_LOG.appendChild(personalZone);
  }
};

const loader = component => {
  const SPINNER = document.createElement('div');
  const INNER_SPINNER = document.createElement('i');

  SPINNER.classList.add('spinner');
  INNER_SPINNER.classList.add('fas', 'fa-spinner', 'fa-lg', 'fa-spin', 'shot');

  SPINNER.appendChild(INNER_SPINNER);
  component.appendChild(SPINNER);

  setTimeout(() => {
    SPINNER.remove();
  }, 500);
};

const insertValue = (component, numberOfAdvancedLog, index) => {
  const ADVANCED_LOG = document.createElement('span');

  if (canMove()) {
    numberOfAdvancedLog[index]++;
    ADVANCED_LOG.classList.add('race-log-icon');
    ADVANCED_LOG.innerHTML = '🏎';
  }

  setTimeout(() => {
    component.appendChild(ADVANCED_LOG);
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
