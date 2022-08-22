import {
  DOM,
  TIME_PER_CAR_ADVANCE,
  TEST_NUMBER_RANDOM_VALUE,
  WINNER_DEFALUT_TEXT_LENGTH,
} from '../../lib/constants';

import getRandomNumber from '../../lib/util/getRandomNumber';

import { carNameInputProcess, gameCountInputProcess } from '../support/commands';

describe('레이싱 게임', () => {
  const baseUrl = '../../index.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  context('자동차 이름 입력을 테스트한다.', () => {
    it('자동차 이름을 입력하지 않았을 때, 다음으로 진행되지 않음.', () => {
      cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).invoke('val', '');
      cy.get(`#${DOM.CAR_NAME_BUTTON_ID}`).click();

      cy.get(`#${DOM.GAME_COUNT_CONTAINER_ID}`).should('not.be.visible');
    });

    it('자동차 이름 중 공백이 존재할 때, 다음으로 진행되지 않음.', () => {
      const NAME_INPUT_CASE = 'one, ,three';
      carNameInputProcess(NAME_INPUT_CASE);

      cy.get(`#${DOM.GAME_COUNT_CONTAINER_ID}`).should('not.be.visible');
    });

    it('자동차 이름 중 하나의 이름이 다섯글자를 넘어갈 때, 다음으로 진행되지 않음.', () => {
      const NAME_INPUT_CASE = 'hello,my,name,is,sangmin';
      carNameInputProcess(NAME_INPUT_CASE);

      cy.get(`#${DOM.GAME_COUNT_CONTAINER_ID}`).should('not.be.visible');
    });

    it('자동차 이름 중 중복되는 이름이 존재할 때, 다음으로 진행되지 않음.', () => {
      const NAME_INPUT_CASE = 'one,two,one';
      carNameInputProcess(NAME_INPUT_CASE);

      cy.get(`#${DOM.GAME_COUNT_CONTAINER_ID}`).should('not.be.visible');
    });
  });

  context('게임 횟수 입력을 테스트한다.', () => {
    const NAME_INPUT_CASE = 'one,two,three,four,five';

    it('게임 횟수를 입력하지 않았을 때, 다음으로 진행되지 않음.', () => {
      carNameInputProcess(NAME_INPUT_CASE);

      cy.get(`#${DOM.GAME_COUNT_INPUT_ID}`).invoke('val', '');
      cy.get(`#${DOM.GAME_COUNT_BUTTON_ID}`).click();

      cy.get(`#${DOM.RACE_LOG_FIELD_ID}`).children().should('not.exist');
    });

    it('게임 횟수에 0 이하의 수를 입력했을 때, 다음으로 진행되지 않음.', () => {
      carNameInputProcess(NAME_INPUT_CASE);

      const COUNT_INPUT_CASE = -1;
      gameCountInputProcess(COUNT_INPUT_CASE);

      cy.get(`#${DOM.RACE_LOG_FIELD_ID}`).children().should('not.exist');
    });

    it('게임 횟수에 정수가 아닌 수를 입력했을 때,다음으로 진행되지 않음.', () => {
      carNameInputProcess(NAME_INPUT_CASE);

      const COUNT_INPUT_CASE = 1.5;
      gameCountInputProcess(COUNT_INPUT_CASE);

      cy.get(`#${DOM.RACE_LOG_FIELD_ID}`).children().should('not.exist');
    });

    it('입력이 완료된 정보는 다시 입력할 수 없음.', () => {
      carNameInputProcess(NAME_INPUT_CASE);

      cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).should('have.attr', 'readOnly');
      cy.get(`#${DOM.CAR_NAME_BUTTON_ID}`).should('have.attr', 'disabled');

      const COUNT_INPUT_CASE = 5;
      gameCountInputProcess(COUNT_INPUT_CASE);

      cy.get(`#${DOM.GAME_COUNT_INPUT_ID}`).should('have.attr', 'readOnly');
      cy.get(`#${DOM.GAME_COUNT_BUTTON_ID}`).should('have.attr', 'disabled');
    });
  });

  context('게임 동작을 테스트한다.', () => {
    it('자동차 전진 조건으로 0에서 9사이의 무작위 값을 얻는다.', () => {
      for (let i = 0; i < TEST_NUMBER_RANDOM_VALUE; i++) {
        const RANDOM_NUMBER = getRandomNumber(0, 10);
        expect(RANDOM_NUMBER >= 0 && RANDOM_NUMBER < 10).be.equal(true);
      }
    });

    it('최소 한명의 우승자가 존재한다.', () => {
      const NAME_INPUT_CASE = 'one,two,three,four,five';
      carNameInputProcess(NAME_INPUT_CASE);

      const COUNT_INPUT_CASE = 5;
      gameCountInputProcess(COUNT_INPUT_CASE);

      cy.wait(COUNT_INPUT_CASE * TIME_PER_CAR_ADVANCE);

      cy.get(`#${DOM.RACE_WINNER_NAME_ID}`)
        .invoke('text')
        .then(text => {
          expect(text.trim().length > WINNER_DEFALUT_TEXT_LENGTH).be.equal(true);
        });
    });

    it('다시 시작하기 버튼이 정상적으로 동작한다.', () => {
      const NAME_INPUT_CASE = 'one,two,three,four,five';
      carNameInputProcess(NAME_INPUT_CASE);

      const COUNT_INPUT_CASE = 5;
      gameCountInputProcess(COUNT_INPUT_CASE);

      cy.wait(COUNT_INPUT_CASE * TIME_PER_CAR_ADVANCE);
      cy.get(`#${DOM.GAME_RESTART_BUTTON_ID}`).click();

      cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).should('not.have.attr', 'readOnly');
      cy.get(`#${DOM.CAR_NAME_BUTTON_ID}`).should('not.have.attr', 'disabled');
    });
  });
});
