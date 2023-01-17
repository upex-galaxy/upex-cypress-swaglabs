const { login } = require('@pages/GX-example/example.Page')

describe('US Example | Test Page Object Model', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    it('test the login page', () => {
        login.enterUsername("UPEX")
        login.enterPassword("123456")
        login.submit()
    });
});