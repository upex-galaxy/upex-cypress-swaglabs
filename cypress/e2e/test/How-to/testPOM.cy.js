const { If } = require('../../../support/POM/GX-example/example.Page')

describe('US Example | Test Page Object Model', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    it('test the login page', () => {
        If.enterUsername("UPEX")
        If.enterPassword("123456")
        If.submit()
    });
});