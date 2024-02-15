// https://on.cypress.io/api

describe('Home page', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'TicTacToe Home Page')
  })
})
