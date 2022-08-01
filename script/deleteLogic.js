export const deleteAll = () => {
  deleteCarNameInput();
  deleteGameCountInput();
  deleteCarNameInGameField();
  deleteRaceLogInGameField();

  const CAR_NAME_INPUT = document.querySelector('#car-name__input');
  const CAR_NAME_BUTTON = document.querySelector('#car-name__button');

  const GAME_COUNT_INPUT = document.querySelector('#game-count__input');
  const GAME_COUNT_BUTTON = document.querySelector('#game-count__button');

  CAR_NAME_INPUT.readOnly = false;
  CAR_NAME_BUTTON.disabled = false;

  GAME_COUNT_INPUT.readOnly = false;
  GAME_COUNT_BUTTON.disabled = false;
};

export const deleteCarNameInput = () => {
  const CAR_NAME_INPUT = document.querySelector('#car-name__input');

  CAR_NAME_INPUT.value = '';
};

export const deleteGameCountInput = () => {
  const GAME_COUNT_INPUT = document.querySelector('#game-count__input');
  GAME_COUNT_INPUT.value = '';

  const GAME_INPUT_CONTAINER = document.querySelector('#game-count__input-container');
  GAME_INPUT_CONTAINER.classList.add('visible__hidden');
};

export const deleteCarNameInGameField = () => {
  const CAR_NAME_CONTAINER = document.querySelector('#car-name-field');

  while (CAR_NAME_CONTAINER.hasChildNodes()) {
    CAR_NAME_CONTAINER.removeChild(CAR_NAME_CONTAINER.firstChild);
  }
};

export const deleteRaceLogInGameField = () => {
  const RACE_LOG_CONTAINER = document.querySelector('#race-log-field');
  while (RACE_LOG_CONTAINER.hasChildNodes()) {
    RACE_LOG_CONTAINER.removeChild(RACE_LOG_CONTAINER.firstChild);
  }

  const WINNER_NAME = document.querySelector('#race-winner-name');
  WINNER_NAME.innerHTML = '';
  if (!WINNER_NAME.classList.value.includes('visible__hidden')) {
    WINNER_NAME.classList.add('visible__hidden');
  }

  const RESTART_BUTTON = document.querySelector('#game-restart__button');
  if (!RESTART_BUTTON.classList.value.includes('visible__hidden')) {
    RESTART_BUTTON.classList.add('visible__hidden');
  }
};
