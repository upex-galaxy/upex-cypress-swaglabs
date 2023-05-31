class LoginSwagLabs{
    
    element = {
        inputUsername : ()=> cy.get('[type="text"]'),
        inputPassword : ()=> cy.get('[type="password"]'),
        buttonLogin : ()=> cy.get('[type="submit"]'),
        cards: () => cy.get('[class$="_item"]'),
        errorMessages: () => cy.get('[data-test="error"]'),
    }

    typeLogin(username, password) {
        cy.wait(1000)
        cy.visit('/')
        if (username !== '' && password !== '') {
            this.element.inputUsername().type(username)
            this.element.inputPassword().type(password)
            this.element.buttonLogin().click()
        }
        if (username === '' && password === '') {
            this.element.buttonLogin().click()
        }
        if (username !== '' && password === '') {
            this.element.inputUsername().type(username)
            this.element.buttonLogin().click()
        }
        if (username === '' && password !== '') {
            this.element.inputPassword().type(password)
            this.element.buttonLogin().click()
        }
    }

    notAuthorizedEndpoint(endpoint) {
        cy.wait(2000)
        cy.visit('/' + endpoint, { failOnStatusCode: false })
    }
    
}

export const loginSwagLabs = new LoginSwagLabs()