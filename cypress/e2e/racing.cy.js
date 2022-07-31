import { DOM } from '../../lib/constants';

import { carNameInputProcess } from '../support/commands';

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
});
