import { DOM } from '../../lib/constants';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export const carNameInputProcess = nameInput => {
  cy.get(`#${DOM.CAR_NAME_INPUT_ID}`).type(nameInput);
  cy.get(`#${DOM.CAR_NAME_BUTTON_ID}`).click();
};

export const gameCountInputProcess = countInput => {
  cy.get(`#${DOM.GAME_COUNT_INPUT_ID}`).type(countInput);
  cy.get(`#${DOM.GAME_COUNT_BUTTON_ID}`).click();
};
