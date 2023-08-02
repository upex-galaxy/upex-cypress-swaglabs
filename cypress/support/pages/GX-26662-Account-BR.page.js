class Account {

    get = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        submitBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]'),

    };
    EnterData(username, password) {
        this.get.usernameInput().type(username);
        this.get.passwordInput().type(password);
    }
    submitClick() {
        this.get.submitBtn().click();
    }
}

 export const accountPage = new Account();