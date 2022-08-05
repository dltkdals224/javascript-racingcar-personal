import { $ } from './document.js';

export const deleteAll = () => {
  resetCarNameInput();
  resetGameCountInput();
  deleteCarNameInGameField();
  deleteRaceLogInGameField();
};

export const resetCarNameInput = () => {
  const CAR_NAME_INPUT = $('#car-name__input');
  CAR_NAME_INPUT.value = '';
  CAR_NAME_INPUT.readOnly = false;

  const CAR_NAME_BUTTON = $('#car-name__button');
  CAR_NAME_BUTTON.disabled = false;
};

export const resetGameCountInput = () => {
  const GAME_COUNT_INPUT = $('#game-count__input');
  GAME_COUNT_INPUT.value = '';
  GAME_COUNT_INPUT.readOnly = false;

  const GAME_COUNT_BUTTON = $('#game-count__button');
  GAME_COUNT_BUTTON.disabled = false;

  const GAME_INPUT_CONTAINER = $('#game-count-container');
  GAME_INPUT_CONTAINER.classList.add('visible__hidden');
};

export const deleteCarNameInGameField = () => {
  const CAR_NAME_CONTAINER = $('#car-name-field');

  while (CAR_NAME_CONTAINER.hasChildNodes()) {
    CAR_NAME_CONTAINER.removeChild(CAR_NAME_CONTAINER.firstChild);
  }
};

export const deleteRaceLogInGameField = () => {
  const RACE_LOG_CONTAINER = $('#race-log-field');
  while (RACE_LOG_CONTAINER.hasChildNodes()) {
    RACE_LOG_CONTAINER.removeChild(RACE_LOG_CONTAINER.firstChild);
  }

  const WINNER_NAME = $('#race-winner-name');
  WINNER_NAME.innerHTML = '';
  if (!WINNER_NAME.classList.value.includes('visible__hidden')) {
    WINNER_NAME.classList.add('visible__hidden');
  }

  const RESTART_BUTTON = $('#game-restart__button');
  if (!RESTART_BUTTON.classList.value.includes('visible__hidden')) {
    RESTART_BUTTON.classList.add('visible__hidden');
  }
};
