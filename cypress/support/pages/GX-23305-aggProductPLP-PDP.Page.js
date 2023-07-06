class addToCart {
    get = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        submitBtn: () => cy.get('#login-button'),

    }
}
export const ATC = new addToCart()