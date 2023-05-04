export class LoginPage{

    constructor() {
        this.userName = '#user-name';
        this.password = '#password';
    }

    fillUsernameField(user) {
        cy.get(this.userName).type(user);
    }
    fillPasswordField(password) {
        cy.get(this.password).type(password);
    }

}