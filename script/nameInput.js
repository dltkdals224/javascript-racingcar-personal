import { $ } from '../lib/util/document.js';

const getGameInput = () => {
  const carNameInput = $('#car-name__input');
  const carNameButton = $('#car-name__button');
  const gameInputContainer = $('#game-count-container');
  const racerNameContainer = $('#car-name-field');

  const CAR_NAME_ARRAY = carNameInput.value.split(',');
  const IS_VALID = isValidInputValueOfCarName(CAR_NAME_ARRAY);

  if (IS_VALID) {
    gameInputContainer.classList.remove('visible__hidden');
    racerNameContainer.classList.remove('visible__hidden');

    setCarNameList(CAR_NAME_ARRAY);

    carNameInput.readOnly = true;
    carNameButton.disabled = true;
  }
};

const setCarNameList = carNameArray => {
  const carNameContainer = $('#car-name-field');

  carNameArray.map((name, ind) => {
    const singleRaceLog = document.createElement('div');

    singleRaceLog.innerHTML = name;

    singleRaceLog.classList.add('car-name__li');
    singleRaceLog.setAttribute('id', ind);

    carNameContainer.appendChild(singleRaceLog);
  });
};

const isValidInputValueOfCarName = carNameArray => {
  const NAME_ARRAY_LENGTH = carNameArray.length;
  const DUP_CAR_NAME_ARRAY = new Set(carNameArray);

  // 개수
  if (NAME_ARRAY_LENGTH <= 1) {
    alert('혼자서는 경기를 할 수 없습니다.');
    return false;
  }

  for (let i = 0; i < NAME_ARRAY_LENGTH; i++) {
    // 공백
    if (carNameArray[i].trim().length === 0) {
      alert(`${i + 1}번째 차 이름 확인해주세요. 이름은 공백으로만 이루어질 수 없습니다.`);
      return false;
    }

    // 이름 길이
    if (carNameArray[i].length > 5) {
      alert(`${i + 1}번째 차 이름 확인해주세요. 이름은 5글자 이내로 작성해야 해야합니다.`);
      return false;
    }
    if (carNameArray[i].length === 0) {
      alert(`${i + 1}번째 차 이름 확인해주세요. 차 이름이 존재해야 합니다.`);
      return false;
    }
  }

  // 중복 확인
  if (carNameArray.length !== DUP_CAR_NAME_ARRAY.size) {
    alert('중복되는 차 이름이 존재합니다.');
    return false;
  }

  return true;
};

(function () {
  const carNameButton = $('#car-name__button');

  carNameButton.addEventListener('click', getGameInput);
})();
